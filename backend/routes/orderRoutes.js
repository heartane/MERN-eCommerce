import express from 'express';
import {
  addOrderItems,
  GetOrderById,
  updateOrderToPaid,
} from '../controllers/orderController.js';
import { protect } from '../middleware/auth.js'; // for private routes
const router = express.Router();

router.route('/').post(protect, addOrderItems);
router.route('/:id').get(protect, GetOrderById);
router.route('/:id/pay').put(protect, updateOrderToPaid);
export default router;
