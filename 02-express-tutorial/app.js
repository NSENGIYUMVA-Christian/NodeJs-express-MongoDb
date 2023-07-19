const express = require("express");
const path = require("path");

const app = express();

// set up static and middleware
app.use(express.static("./public"));

// error
app.get("*", (req, res) => {
  res.status(404).send("Resource not found");
});

app.listen(5000, () => {
  console.log("Listening to port 5000");
});
