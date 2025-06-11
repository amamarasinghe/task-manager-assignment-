const nodemailer = require('nodemailer');

const otpStore = {}; // In-memory OTP storage (for demo; you’ll later store it properly)

function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

const sendOTP = async (email) => {
  const otp = generateOTP();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Your Verification OTP',
    text: `Your OTP is: ${otp}`
  };

  await transporter.sendMail(mailOptions);
  otpStore[email] = otp;
  return otp;
};

const verifyOTP = (email, otpInput) => {
  return otpStore[email] === otpInput;
};

module.exports = { sendOTP, verifyOTP };
