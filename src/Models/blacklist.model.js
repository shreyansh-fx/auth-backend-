const mongoose = require("mongoose");

const tokenBlacklistSchema = new mongoose.Schema(
  {
    token: {
      type: String,
    },
  },
  { timestamps: true },
);

const tokenBlacklist = mongoose.model("tokenBlacklist", tokenBlacklistSchema);

module.exports = tokenBlacklist;
