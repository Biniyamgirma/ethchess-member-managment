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
    const match = await prisma.matchHistory.findFirst({
      where: { user_id, result: "on_going" },
    });
    if (!match) {
      return NextResponse.json({ error: "No active match found for this user." }, { status: 404 });
    }

    if (!match.started_at) {
  return NextResponse.json(
        { error: "Match has no recorded start time." },
        { status: 400 }
    );
    }

    const durationMinutes = Math.ceil(
    (Date.now() - match.started_at.getTime()) / 60000
    );
    const fee = durationMinutes * 1;
    const updatedMatch = await prisma.matchHistory.update({
      where: { id: match.id },
      data: {
        result: "completed",
        game_end_at: new Date(),
        status:0,
        total_amount:fee,
        min:durationMinutes
      },
    });

    const data ={...updatedMatch,total_amount:fee}
    return NextResponse.json({message:"Game Fee calculated success",data:data})

    }catch(error:any){
        console.error("Registration Error: ", error);
    }
}