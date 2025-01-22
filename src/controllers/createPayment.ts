import { Request,Response } from "express";
import Stripe from "stripe";
import prisma from "../prisma/client";


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion:'2024-12-18.acacia'
});


const createPayment = async (req: Request,res: Response) => {

    const { amount,currency,userId } = req.body;

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount:  Math.round(amount * 100),
            currency,
        })

        const payment = await prisma.payment.create({
            data: {
                id: paymentIntent.id,
                amount,
                currency,
                status: paymentIntent.status,
                userId,
                
            }

            
        })

        res.status(201).json(payment)

    } catch(error){
        res.status(500).json(error)

    }

    

}

export default createPayment;
