import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || '052b9e420165ecc417881282ac89820588f936018204e359da21183a8238d49bded4ac147b98dcacc50e5da4857ece24aee7237a934ab195211d0a1c2283bee8'; // store in .env in production
const JWT_EXPIRES_IN = '24h';

export function generateToken(payload: object): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
}

export function verifyToken(token: string): any {
  return jwt.verify(token, JWT_SECRET);
}
