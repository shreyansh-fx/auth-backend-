const express = require("express");
const authRoute = express.Router();
const {
  signupValidation,
  loginValidation,
  ensureAuthenticated,
} = require("../Middlewares/AuthValidation.js");

const { signup, login } = require("../Controllers/auth.controller.js");

authRoute.post("/signup", signupValidation, signup);
authRoute.post("/login", loginValidation, login);
authRoute.post("/logout", ensureAuthenticated, logout);

module.exports = authRoute;
