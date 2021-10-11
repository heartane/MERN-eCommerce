import express from 'express';
import asyncHandler from 'express-async-handler';
import Product from '../models/product.js';

const router = express.Router();

// @desc   Fetch all products
// @route  GET /api/products
// @access Public
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({}); // {} 모든 것을 가져온다.
    res.json(products);
  })
);

// @desc   Fetch single product
// @route  GET /api/products/:id
// @access Public
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) res.json(product);
    else {
      res.status(404); // 설정 안하면 500
      throw new Error('Product not found');
    }
  })
);

export default router;