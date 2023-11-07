import jwt from "jsonwebtoken";

export const generateToken = (
    userId: string,
    email: string,
    expiresIn: string) => {
    const payload = { userId, email };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn });
    return token;
}
