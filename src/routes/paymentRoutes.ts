import express from "express";
import { createPayment } from "../controllers/paymentControllers";


const router = express.Router();

router.post('/create-payment', createPayment);
router.get('/payment-status/{id}')



export default router