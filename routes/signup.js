const express = require('express');
const router = express.Router();

// POST /auth, 로그인 요청
router.post('/', (req, res, next) => {
  const { nickname, email, password, confirmPassword } = req.body;
  console.log('nickname, email, password: ', nickname, email, password, confirmPassword);
});

module.exports = router;
