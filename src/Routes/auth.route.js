const express = require('express');
const authRoute = express.Router();

const  { signup } = require('../Controllers/auth.controller.js');

authRoute.post("/signup",signup)
// authRoute.post("/login")
// authRoute.post("/logout")

module.exports = authRoute;