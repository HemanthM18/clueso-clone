const passport = require('passport');
const jwt = require('jsonwebtoken');
const express = require('express');
const { register, login } = require('../controllers/authController');

const router = express.Router();

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '7d' });
};

router.post('/register', register);
router.post('/login', login);

router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get(
  '/google/callback',
  passport.authenticate('google', { session: false }),
  (req, res) => {
    const token = generateToken(req.user._id);

    res.redirect(
      `http://localhost:3000/oauth-success?token=${token}`
    );
  }
);

module.exports = router;
