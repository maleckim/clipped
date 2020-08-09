const express = require('express');
const authRouter = express.Router();
const jsonBodyParser = express.json();

authRouter.post('/login', jsonBodyParser, (req, res, next) => {
  const { email, password } = req.body;
  const loginuser = { email, password };

  return res.json({ loginuser });
});

module.exports = authRouter;
