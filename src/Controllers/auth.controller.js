const bcrypt = require("bcryptjs");
const User = require("../Models/user.model.js");
const genToken = require("../Utils/genToken.js");
const sendEmail = require("../Utils/sendMail.js");

const signup = async (req, res) => {
  const { email, name, password } = req.body;

  if (!email || !name || !password) {
    return res.status(400).json({ message: "Enter all Details" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({ email, name, password: hashedPassword });

  const token = genToken(user);
  
  sendEmail({
    to: email,
    name: name,
  });

  res.cookie("token", token, {
    httpOnly: true,
  });

  return res.status(201).json({
    message: "User created",
  });
};

module.exports = {
  signup,
};
