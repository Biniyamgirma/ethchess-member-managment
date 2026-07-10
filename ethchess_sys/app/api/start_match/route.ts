import { NextResponse,NextRequest } from "next/server";
import { prisma } from "@/lib/utils/prisma";
import { verifyToken } from "@/lib/verify-token";

export async function POST(request: NextRequest){
    try {
        const token = request.cookies.get("token")?.value;  
              const body = await request.json()
        if(!token) {
                return NextResponse.json({ error: "Not authenticated." }, { status: 401 });
        }
        const payload = verifyToken(token);
        if(payload.role != 'match_manager'){
            return NextResponse.json( { error: "Unauthorized ." }, { status: 403  }
            )
        }
        const {user_id} = body;

        if(!user_id){
            return NextResponse.json(
                {error: "Require fields are missing."},
                { status:400}
            )
        }
        const is_user_have_on_going_match = await prisma.matchHistory.findFirst(
            {where:{user_id,result:"on_going"}}
        )
        if(is_user_have_on_going_match) {
          return  NextResponse.json({ error:"User have previous match" },{status:422})
        }
        const response = await prisma.matchHistory.create({
            data:{
                user_id:user_id,
                started_at:new Date(),
                result:'on_going'
            }
        })
         return NextResponse.json(
      { message: "Match started success", match_id: response.id, user_id:response.user_id ,started_at:response.started_at },
      { status: 200 }
    )
    }catch(error:any){
        console.error("Registration Error: ", error);
    }
}