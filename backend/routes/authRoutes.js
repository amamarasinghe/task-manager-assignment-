const express = require('express');
const router = express.Router();
// const { register, login } = require('../controllers/authController');
const {register,login,sendOTPController,verifyOTPAndRegister} = require('../controllers/authController');

// @route   POST /api/auth/register
router.post('/register', register);

// @route   POST /api/auth/login
router.post('/login', login);

module.exports = router;

router.post('/send-otp', sendOTPController);
router.post('/verify-otp', verifyOTPAndRegister);
router.post('/register', register); // Optional if you're replacing this with OTP flow
router.post('/login', login);