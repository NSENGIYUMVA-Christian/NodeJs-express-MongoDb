// importing dotenv
require("dotenv").config();

require("express-async-errors");

//importing express
const express = require("express");
const app = express();

// rest of the packages
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
// routers imports
const authRouter = require("./routers/authRoutes");
// connect to DATABASE import
const connectDb = require("./db/connect");
//middleware imports
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

//pre middlewares
app.use(morgan("tiny"));
app.use(express.json());
app.use(cookieParser());

// main routers
app.get("/", (req, res) => {
  console.log(req.cookies);
  res.send("e-commerce -app proj");
});
//test route
app.get("/api/v1", (req, res) => {
  console.log(req.cookies);
  res.send("console cookies");
});
app.use("/api/v1/auth", authRouter);

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
