
import express from "express";
import { loginController } from "../controllers/authControllers";

const router = express.Router();

router.post("/login", async (req, res) => {
    try {
        const result = await loginController(req, res);

        if (result.status) {
            res.status(result.status).json(result);
        } else {
            res.json(result);
        }
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
    }
});

export default router;
