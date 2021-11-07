import express from 'express';
import { addOrderItems, GetOrderById } from '../controllers/orderController.js';
import { protect } from '../middleware/auth.js'; // for private routes
const router = express.Router();

router.route('/').post(protect, addOrderItems);
router.route('/:id').get(protect, GetOrderById);
export default router;
