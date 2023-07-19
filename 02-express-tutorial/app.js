const express = require("express");
const morgan = require("morgan");
const logger = require("./logger");
const authorize = require("./authorize");
const app = express();

app.use(morgan("tiny"));

app.get("/", (req, res) => {
  return res.send(`Welcome Home`);
});
app.get("/about", (req, res) => {
  return res.send("About");
});
// passing multiple middle ware to a specific route
app.get("/api/products", (req, res) => {
  return res.send("products");
});
app.get("/api/items", (req, res) => {
  return res.send("Items");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
