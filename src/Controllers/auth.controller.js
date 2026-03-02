const bcrypt = require("bcryptjs");
const User = require("../Models/user.model.js");
const tokenBlacklist = require("../Models/blacklist.model.js");
const genToken = require("../Services/genToken.js");
const {
  registrationEmail,
  verificationEmail,
} = require("../Services/sendMail.js");

const signup = async (req, res) => {
  const { email, name, password } = req.body;

  if (!email || !name || !password) {
    return res.status(400).json({ message: "Enter all Details" });
  }

  const existingUser = await User.findOne({ email }); //data extracted with pass

  if (existingUser) {
    return res.status(400).json({ message: "user already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({ email, name, password: hashedPassword });

  const token = genToken(user);

  // registrationEmail({ to: email, name: name });  //send email on registration!

  res.cookie("token", token, {
    httpOnly: true,
  });

  return res.status(201).json({
    message: "User created",
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Enter all Details" });
  }

  const existingUser = await User.findOne({ email }); //data extracted with pass

  if (!existingUser) {
    return res.status(404).json({ message: "user not found" });
  }

  const passMatch = await bcrypt.compare(password, existingUser.password);

  if (!passMatch) {
    return res.status(400).json({ message: "Invalid Credentials" });
  }

  //incase everythings fine then return a jwt token!
  const token = genToken(existingUser);
  res.cookie("token", token, {
    httpOnly: true,
  });

  return res.status(201).json({
    message: "User logged in Successfully",
  });
};

const logout = async (req, res) => {
  const token = req.cookies.token;

  if (token) {
    await tokenBlacklist.create({
      token,
    });
  }

  res.clearCookie("token");
  return res.status(200).json({ message: "user logged out successfully" });
};

module.exports = {
  signup,
  login,
  logout,
};
