import { Request, Response } from "express";
import { loginUser } from "../service/authServices";

export const loginController = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const token = await loginUser(username, password);

    if (!token) {
      return { status: 401, message: 'Credenciais inválidas' };
    }

    return { status: 200, token };
  } catch (error) {
    console.error("Erro no login:", error);
    return { status: 500, message: 'Erro interno do servidor', error };
  }
};
