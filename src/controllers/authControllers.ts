// src/controllers/authController.ts
import { Request, Response } from "express";
import { loginUser } from "../service/authServices";


export const loginController = async (req: Request, res: Response): Promise<Response> => {
  const { username, password } = req.body;

  try {
    
    const token = await loginUser(username, password);

    if (!token) {
      return res.status(401).json({ message: 'Credenciais inválidas' });
    }

    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno do servidor', error });
  }
};
