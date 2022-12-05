const express = require('express');
const router = express.Router();

// POST /auth, 로그인 요청
router.post('/', (req, res, next) => {
  const { email, password } = req.body;
  console.log('email, password: ', email, password);
});

module.exports = router;
