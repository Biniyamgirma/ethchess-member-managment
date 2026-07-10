import jwt from "jsonwebtoken";

export interface TokenPayload {
  userId: string;
  role: string;
  fullName: string;
  iat: number;
  exp: number;
}

export function verifyToken(token: string): TokenPayload {
  return jwt.verify(token, process.env.JWT_SECRET!) as TokenPayload;
}