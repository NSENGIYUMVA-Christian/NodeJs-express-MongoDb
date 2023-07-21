require("./db/connect");
const express = require("express");
const tasks = require("./routes/tasks");
const app = express();

//middleware to parse incoming json
app.use(express.json());

//routes
app.use("/api/v1/tasks", tasks);

const port = 3000;

app.listen(port, console.log(`listening to port ${port}`));
