// importing dotenv
require("dotenv").config();

require("express-async-errors");

//importing express
const express = require("express");
const app = express();
// connect to DATABASE import
const connectDb = require("./db/connect");
//middleware imports
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

//express middleware
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("e-commerce -app proj");
});

//not found url middleware
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

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
