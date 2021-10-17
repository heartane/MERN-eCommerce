import asyncHandler from 'express-async-handler';
import User from '../models/user.js';

// @desc   Auth user & get token
// @route  Post /api/users/login
// @access Public
const authUser = asyncHandler(async (req, res) => {
  // 클라이언트에서 로그인 폼을 만들고 submit 버튼을 누르면 req.body로 회원정보가 들어올 것이다.
  // 그 정보를 받아 사용해야 한다. -> bodyparser middleware가 필요하다.

  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: null,
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

export { authUser };
