import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/utils/prisma";
import { verifyPassword } from "@/lib/auth-utils";
import { generateToken } from "@/lib/jwt/token-generator";
export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { user_id, password } = body;
        
        const user = await prisma.members.findUnique({
            where: { id: user_id },
        });
        if(!user){
            return NextResponse.json({ error: "User ID and password are required." }, { status: 400 });
        }
        const { password: _, ...secureUserData } = user;
        if (!user) {
            return NextResponse.json({ error: "User not found." }, { status: 404 });
        }
        if (!user.password) {
            return NextResponse.json({ error: "Invalid credentials." }, { status: 401 });
        }
        const isMatch = await verifyPassword(password, user.password);
        if (!isMatch) {
            return NextResponse.json({ error: "Invalid credentials." }, { status: 401 });
        }
        // 5. Verify account status (e.g., if status 0 means suspended or inactive)
        if (user.is_deleted === 1) {
        return NextResponse.json(
            { error: "This account has been deactivated." },
            { status: 403 }
        );
        }
        // 6. Generate the JWT Payload and Token
    const token = generateToken({
        userId: user.id,
        role: user.role || "player",
        fullName: `${user.f_name || ""} ${user.l_name || ""}`.trim(),
      });
      const response = NextResponse.json({ message: "Login successful",user:secureUserData });
        response.cookies.set("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: "/",
        });
return response;

    } catch (error) {
        console.error("Login error:", error);
        return NextResponse.json({ error: "Internal server error." }, { status: 500 });
    }
}
