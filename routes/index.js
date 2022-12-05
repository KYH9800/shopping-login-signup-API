const express = require('express');
const router = express.Router();
// router
const loginRouter = require('./login');
const signupRouter = require('./signup');

router.get('/', (req, res, next) => {
  res.send('wellcome to shoping-mall!!');
});

router.use('/auth', loginRouter); // 로그인
router.use('/users', signupRouter); // 회원가입

module.exports = router;
