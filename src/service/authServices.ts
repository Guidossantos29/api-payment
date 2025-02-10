
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import prisma from "../prisma/client";



export const loginUser = async (username: string, password: string) => {
 
  const secretKey = process.env.JWT_SECRET;

  if (!secretKey) {
    throw new Error("JWT_SECRET não está definido.");
  }

  const token = jwt.sign({ username }, secretKey, {
    expiresIn: "1h",
  });

  return token;
};
