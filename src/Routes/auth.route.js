const { Router } = require("express");
const authRoute = Router();
const {
  signupValidation,
  loginValidation,
  ensureAuthenticated,
} = require("../Middlewares/AuthValidation.js");

const { signup, login, logout } = require("../Controllers/auth.controller.js");

authRoute.post("/signup", signupValidation, signup);
authRoute.post("/login", loginValidation, login);
authRoute.post("/logout", ensureAuthenticated, logout);

module.exports = authRoute;
