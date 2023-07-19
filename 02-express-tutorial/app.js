const express = require("express");
const logger = require("./logger");
const authorize = require("./authorize");
const app = express();

// middle ware
//req=>middleware=>res

// passing multiple middleware
app.use([logger, authorize]);

app.get("/", (req, res) => {
  console.log(req.user);
  const { name } = req.user;
  res.send(`Welcome back ${name}`);
});
app.get("/about", (req, res) => {
  res.send("About");
});
app.get("/api/products", (req, res) => {
  res.send("products");
});
app.get("/api/items", (req, res) => {
  res.send("Items");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
