import {hash, compare } from 'bcrypt-ts';

const SALT_ROUNDS = 11;

export async function hashPassword(password: string): Promise<string>{
    return await hash(password, SALT_ROUNDS)
}

export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean>{
    return await compare(password, hashedPassword)
}
