import express from 'express';
import {
  addOrderItems,
  getMyOrders,
  GetOrderById,
  updateOrderToPaid,
} from '../controllers/orderController.js';
import { protect } from '../middleware/auth.js'; // for private routes
const router = express.Router();

router.route('/').post(protect, addOrderItems);
router.route('/myorders').get(protect, getMyOrders); // 순서도 중요하다
// when you placed (/:id) above the (/myorder), then you input the URL with /.../myorders,
// Route will consider myorders as an id, and it is not a type of ObjectId
router.route('/:id').get(protect, GetOrderById);
router.route('/:id/pay').put(protect, updateOrderToPaid);
export default router;
