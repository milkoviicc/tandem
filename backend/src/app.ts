import express from 'express';
import userRoutes from './routes/userRoutes';
import subscriptionRoutes from './routes/subscriptionRoutes';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

// Mount the user routes here
app.use('/api/users', userRoutes);
app.use('/api/subscription', subscriptionRoutes);

app.get('/', (req, res) => {
  res.send('Hello from backend!');
});

export default app;
