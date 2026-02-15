require("dotenv").config();
const express = require("express");
const authRoute = require("./src/Routes/auth.route.js");
const connectDb = require("./src/Config/db.js");
const cookieParser = require('cookie-parser');

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);

const PORT = process.env.PORT;
app.get("/",(req,res)=>{
  res.send("Welcome to Connect API 🚀");
})

connectDb();
app.listen(PORT, () => {
  console.log("Server is running at PORT:" + PORT);
});
