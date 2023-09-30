// importing dotenv
require("dotenv").config();

//importing express
const express = require("express");

const connectDb = require("./db/connect");

const app = express();

// server port
const port = process.env.PORT || 3000;

// starting server function
const start = async () => {
  // connecting to DB
  await connectDb(process.env.MONGO_URL);
  //listening to the server
  app.listen(port, () => {
    console.log(`the server is listening to port ${port}`);
  });
};

// invoke start function
start();
