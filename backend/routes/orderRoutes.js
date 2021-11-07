import express from 'express';
import { addOrderItems } from '../controllers/orderController.js';
import { protect } from '../middleware/auth.js'; // for private routes
const router = express.Router();

router.route('/').post(protect, addOrderItems);

export default router;
