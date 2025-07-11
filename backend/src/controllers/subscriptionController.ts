import {Request, Response} from 'express';
import { comparePasswords, hashPassword } from "../services/authService";
import sql from 'mssql';
import { request } from '../db'; // Import the reusable request function
import { generateToken } from '../utils/jwtService';
import stripe from '../utils/paymentService';

interface Subscription {
    userId: number;
    plan: string;
    amount: number;
    interval: string;
}

const subscriptions: Subscription[] = [];

export async function pickPlan(req: Request, res: Response) {
    const { userId, plan, amount, interval } = req.body;

    if (!userId || !plan || !amount || !interval) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const requestInstance = await request();

        const currentTimestamp = new Date();

        await requestInstance
            .input('UserId', userId)
            .input('PlanName', sql.NVarChar(100), plan)
            .input('Amount', sql.Decimal(10,2), amount)
            .input('Interval', sql.NVarChar(20), interval)
            .input('Status', 'pending')
            .input('CreatedAt', currentTimestamp)
            .query(`
                INSERT INTO Subscriptions (UserId, PlanName, Amount, Interval, Status, CreatedAt)
                VALUES (@UserId, @PlanName, @Amount, @Interval, @Status, @CreatedAt)
            `);

        return res.status(200).json({ message: 'Subscription plan picked successfully' });
    } catch (error: any) {
        console.error('Error adding subscription:', error?.message || error);
        res.status(500).json({ message: 'Internal server error' });
    }
    
}

export async function createCheckoutSession(req: Request, res: Response) {
  const { planName, amount, userId } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'euro',
            product_data: { name: planName },
            unit_amount: Math.round(amount * 100),
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.CLIENT_URL}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.CLIENT_URL}/payment-cancel`,
      metadata: { userId, planName },
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error('Stripe session error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export async function confirmPayment(req: Request, res: Response) {
    const {userId, stripePaymentId} = req.body;

    if(!userId || !stripePaymentId) {
        return res.status(400).json({message: 'All fields are required'});
    }

    try {
        const requestInstance = await request();

        const currentTimestamp = new Date();

        await requestInstance
            .input('UserId', userId)
            .input('StripePaymentId', stripePaymentId)
            .input('CurrentTimestamp', currentTimestamp)
            .query(`
                UPDATE Subscriptions
                SET status = 'paid', PaidAt = @CurrentTimestamp, PaymentId = @StripePaymentId
                WHERE UserId = @UserId AND status = 'pending'
            `);

        return res.status(200).json({ message: 'Subscription paid successfully' });
    } catch (error: any) {
        console.error('Error adding payment:', error?.message || error);
        res.status(500).json({ message: 'Internal server error' });
    }
}