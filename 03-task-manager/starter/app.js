const express = require("express");
const tasks = require("./routes/tasks");
const connectDb = require("./db/connect");
require("dotenv").config();
const notFound = require("./middleware/not-found");
const errorHandleMiddleware = require("./middleware/error-handler");

const app = express();

// middleware to run our static file(frontend app)
app.use(express.static("./public"));

//middleware to parse incoming json
app.use(express.json());

//routes
app.use("/api/v1/tasks", tasks);

//handling invalid url api request
app.use(notFound);

//handling errors when promise rejected
app.use(errorHandleMiddleware);

// port variable
const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URL);
    app.listen(port, console.log(`server is listening to port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
