import { NextResponse,NextRequest } from "next/server";
import { prisma } from "@/lib/utils/prisma";
import { verifyToken } from "@/lib/verify-token";
type MatchTable = {
  user_id: string
  match_id:string
  first_name: string
  phone:string
  game_started_at:Date | string
  game_end_at:Date | string
  min:number | null
  result:string | null
  total_amount:number | null
};
export async function GET(request: NextRequest){
    try {
        const token = request.cookies.get("token")?.value;    

        if(!token) {
                return NextResponse.json({ error: "Not authenticated." }, { status: 401 });
        }
        const payload = verifyToken(token);
        if(payload.role != 'match_manager'){
            return NextResponse.json( { error: "Unauthorized ." }, { status: 403  }
            )
        }

    const matches = await prisma.$queryRaw<MatchTable[]>`
        SELECT
            mh.user_id  as user_id,
            mh.id as match_id,
            m.f_name as first_name,
            m.phone as phone,
            mh.started_at as game_started_at,
            mh.game_end_at as game_end_at,
            mh.min as min,
            result as result,
            mh.total_amount as total_amount

            from match_history mh
            join members m on m.id=mh.user_id 
            where mh.created_at >= NOW() - '3 months'::interval
            order by game_started_at Desc;

    `;
    if (!matches) {
      return NextResponse.json({ error: "No active match found for this user." }, { status: 404 });
    }
    return NextResponse.json({message:"Data fetched Success",data:matches})
    }catch(error:any){
        console.error("Registration Error: ", error);
    }
}