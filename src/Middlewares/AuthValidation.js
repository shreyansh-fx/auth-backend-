const Joi = require("joi");
const jwt = require("jsonwebtoken");
const verifyToken = require("./tokenValidation.js");
const tokenBlacklist = require("../Models/blacklist.model.js");


const signupValidation = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(100).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(4).max(100).required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    // return res.status(400).json({ message: "Bad request", error});
    return res
      .status(400)
      .json({ message: "Bad request", error: error.details[0].message });
  }
  next();
};

const loginValidation = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(4).max(100).required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: "Bad request", error });
  }
  next();
};

const ensureAuthenticated = async (req, res, next) => {
  const token = req.cookies.token;

  try {
    const decoded = verifyToken(token); //jwt.verify() throws error when not valid , so we wrap it in try catch block to handle that error and send proper response to the client

    if (!decoded) {
      return res
        .status(403)
        .json({ message: "Unauthorized, JWT token is required" });
    }

    const blacklistedToken = await tokenBlacklist.findOne({ token });

    if (blacklistedToken) {
      return res.status(401).json({ message: "Unauthorized, token is blacklisted" });
    }  //logout tokens shouldn't be able to access anymore

    req.user = decoded;

    //!all user data will be available in req.user, can be used via the frontend to show user data in the UI or for authorization purpose

    next();
  } catch (error) {
    console.error("ensureAuthenticated error:", error.message);
    return res.status(401).json({ message: "Unauthorized, invalid token" });
  }
};

module.exports = {
  signupValidation,
  loginValidation,
  ensureAuthenticated,
};
