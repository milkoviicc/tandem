import express from 'express';
import { pickPlan, confirmPayment, createCheckoutSession } from '../controllers/subscriptionController';


const router = express.Router();

router.post('/pickPlan', pickPlan);
router.post('/checkout', confirmPayment);
router.post('/createCheckoutSession', createCheckoutSession);


export default router;