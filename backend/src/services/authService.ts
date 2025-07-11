import bcrypt from 'bcrypt';

const saltRounds = 10;

export async function hashPassword(plainPassword: string): Promise<string> {
    return await bcrypt.hash(plainPassword, saltRounds)
}

export async function comparePasswords(
    plainPassword: string,
    hashedPassword: string
): Promise<boolean> {
    return await bcrypt.compare(plainPassword, hashedPassword)
}