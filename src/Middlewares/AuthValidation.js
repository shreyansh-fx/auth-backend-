const Joi = require("joi");
const jwt = require("jsonwebtoken");

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
  const decoded = verifyToken(token);

  try {
    if (!decoded) {
      return res
        .status(403)
        .json({ message: "Unauthorized, JWT token is required" });
    }

    // const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // req.user = decoded;

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
