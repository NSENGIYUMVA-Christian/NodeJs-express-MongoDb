const express = require("express");
const tasks = require("./routes/tasks");
const connectDb = require("./db/connect");
require("dotenv").config();

const app = express();

//middleware to parse incoming json
app.use(express.json());

//routes
app.use("/api/v1/tasks", tasks);

const port = 3000;

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URL);
    app.listen(port, console.log(`server is listening to port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
