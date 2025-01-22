import express from "express";
import createPayment from "../controllers/createPayment";

const router = express.Router();

router.post("/",createPayment)
