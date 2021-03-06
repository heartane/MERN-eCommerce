import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/user.js';

// 토큰 정보를 받아서 해독하고 검증한다.
const protect = asyncHandler(async (req, res, next) => {
  let token;
  const authorization = req.headers.authorization;

  if (authorization && authorization.startsWith('Bearer')) {
    try {
      token = authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

      req.user = await User.findById(decoded.id).select('-password');
      // console.log(req.user);
      next(); // getUserProfile로!
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error('Not authorized, token failed');
    }
  }
  if (!token) {
    res.status(401);
    throw new Error('Not authorized, no token');
  }
});

const admin = asyncHandler(async (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error('Not authorized as an admin');
  }
});

export { protect, admin };
