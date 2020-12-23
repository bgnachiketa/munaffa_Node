const express = require("express");
require("dotenv").config();

const app = express();

//Reading .env file
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT;

//Importing Routers
const userRouter = require("./src/routes/userRouter");
const productRouter = require("./src/routes/productRouter");

app.use(express.json());

//Using Routers
app.use(userRouter);
app.use(productRouter);

//Run
app.listen(PORT, () => {
  console.log(`Munaffa App Running on ${PORT}`);
});
