import express from 'express';
import {
  getProductById,
  getProducts,
  deleteProduct,
} from '../controllers/productController.js';
import { admin, protect } from '../middleware/auth.js'; // for private routes

const router = express.Router();

router.route('/').get(getProducts);
router.route('/:id').get(getProductById).delete(protect, admin, deleteProduct);

export default router;
