const express = require("express");
const connectDb = require("./src/Config/db.js");
const cookieParser = require("cookie-parser");
const authRoute = require("./src/Routes/auth.route.js");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors()); // Enable CORS for all routes,will fix for client only

app.use("/api/auth", authRoute);

app.get("/", (req, res) => {
  res.send("Welcome to Connect API 🚀");
});

connectDb();
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("Server is running at PORT:" + PORT);
});
