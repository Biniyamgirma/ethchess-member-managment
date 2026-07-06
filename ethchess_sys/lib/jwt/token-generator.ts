import jwt from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET || "a_secure_local_fallback_secret_key";

export function generateToken(payload: any) {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: "1d" }); // Token expires in 24 hours
}