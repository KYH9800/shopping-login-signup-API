const express = require('express');
const router = express.Router();
// router
const loginRouter = require('./login');
const signupRouter = require('./signup');
const userRouter = require('./user');

router.get('/', (req, res, next) => {
  res.send('wellcome to shoping-mall!!');
});

router.use('/auth', loginRouter); // 로그인
router.use('/users', signupRouter); // 회원가입
router.use('/users', userRouter); // 내 정보 조회

module.exports = router;
