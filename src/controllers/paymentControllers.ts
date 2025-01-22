
import { Request, Response } from "express";
import Stripe from "stripe";
import prisma from "../prisma/client";


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: '2024-12-18.acacia'
});


export const createPayment = async (req: Request, res: Response) => {

    const { amount, currency, userId } = req.body;

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: Math.round(amount * 100),
            currency,
        })

        const payment = await prisma.payment.create({
            data: {
                stripePaymentId: paymentIntent.id, 
                amount,
                currency,
                status: paymentIntent.status,
                userId,
                User: {
                    connect: { id: userId }, 
                },
            },
        });

        res.status(201).json(payment)

    } catch (error) {
        res.status(500).json(error)

    }



}


export const GetPaymentStatus = async (req: Request, res: Response) => {
    const { id } = req.params

    try {
        const payment = await prisma.payment.findUnique({
            where: { id: id }
        })

        res.status(201).json(payment)
    } catch(error){
        res.status(500).json(error)
    }

}
