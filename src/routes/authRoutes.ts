// src/routes/authRoutes.ts
import express from "express";
import { loginController } from "../controllers/authControllers";

const router = express.Router();

router.post("/login", async (req, res) => {
    try {
        const result = await loginController(req, res);
        res.json(result);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
    } 
});

export default router;
