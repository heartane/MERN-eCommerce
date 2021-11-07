import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import { errHandler, notFound } from './middleware/error.js';

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

app.get('/api/config/paypal', (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);

// custom handler for error
app.use(notFound);
app.use(errHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () =>
  console.log(
    colors.magenta.bold(
      `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
    )
  )
);

export default server;
