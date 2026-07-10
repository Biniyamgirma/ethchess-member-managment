import { NextResponse } from "next/server";
import { prisma } from "@/lib/utils/prisma";
import crypto from "crypto";
import { hashPassword } from '@/lib/auth-utils';

// Helper to generate a unique 7-character ID matching your VarChar(7) constraint


export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const { 
      firstName, 
      lastName, 
      telegram, 
      phone, 
      subcity, 
      address, 
      password, 
      userFrom,
      cdc,
      lichess
    } = body;

    // 1. Basic validation
    if (!firstName ||  !lastName || !password) {
      return NextResponse.json(
        { error: "Required fields are missing." },
        { status: 400 }
      );
    }
    const hashedPassword = await hashPassword(password);
    const generateMemberId = async (): Promise<string> => {
        const prefix = "U";
        const lastMember = await prisma.members.findFirst({
          orderBy: { created_at: "desc" },
        });
        let lastIdNumber = 0;
        if (lastMember && lastMember.id) {
          const lastId = lastMember.id;
          if (lastId.startsWith("U") ) {
            lastIdNumber = parseInt(lastId.substring(1), 10);
          } 
        }
        const newIdNumber = lastIdNumber + 1;
        return `${prefix}${newIdNumber.toString().padStart(3, "0")}`;
      };

    // 2. Generate the 7-char VarChar primary key
    const uniqueId = await generateMemberId();

    // 3. Construct combined address layout if needed
    const fullAddress = subcity ? `${subcity}, ${address || ""}` : address;

    // 4. Create the member in the database
    const newMember = await prisma.members.create({
      data: {
        id: uniqueId,
        f_name: firstName,
        l_name: lastName,
        phone: phone || null,
        password: hashedPassword,
        subcity:subcity || 102,
        address: fullAddress || null,
        user_from: userFrom || null,
        telegram_username: telegram || null, // Temporary mapping since schema lacks an email field
        status: 1, // Defaulting to an active status integer
        is_deleted: 0,
        is_monthly_payment_paid: 0,
        role: "player", // Default role assignment
      },
    });

    const memeber_details = await prisma.memberDetails.create({
      data: {
        user_id:uniqueId,
        chess_dot_com_username:cdc,
        lichess_username:lichess
      },
    });
    // Return success without reflecting the raw password back
    const { password: _, ...secureMemberData } = newMember;

    return NextResponse.json(
      { message: "Member registered successfully", member: secureMemberData,memeber_details:memeber_details },
      { status: 201 }
    );

  } catch (error: any) {
    console.error("Registration Error: ", error);
    
    // Check for Prisma unique constraint violations
    if (error.code === "P2002") {
      return NextResponse.json(
        { error: "A member with these unique traits already exists." },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: "An internal server error occurred." },
      { status: 500 }
    );
  }
}