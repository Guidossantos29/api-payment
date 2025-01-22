
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import prisma from "../prisma/client";

export const loginUser = async (username: string, password: string) => {

    const user = await prisma.user.findUnique({
        where: { email: username },
    });

    if (!user) {
        return null;
    }


    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        return null;
    }


    const token = jwt.sign(
        { userId: user.id, username: user.email },
        process.env.JWT_SECRET_KEY as string,
        { expiresIn: '1h' }
    );

    return token;
};
