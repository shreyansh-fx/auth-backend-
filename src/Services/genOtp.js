// a 6 digit otp code for verification
const generateOtp = () => Math.floor(Math.random() * 900000 + 100000);

module.exports = generateOtp;