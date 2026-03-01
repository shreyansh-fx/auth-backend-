const jwt = require("jsonwebtoken");

const genToken = (user) => {
  //user giving email, pass, _id, should i be not sending password?

  return jwt.sign(
    { id: user._id, email: user.email },
    process.env.JWT_SECRET_KEY,
    { expiresIn: "7d" },
  );
};

module.exports = genToken;
