const express = require("express");
const logger = require("./logger");
const app = express();

// middle ware
//req=>middleware=>res

app.use("/api", logger);

app.get("/", (req, res) => {
  res.send("Home");
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
