const express = require("express");
const { products } = require("./data");
const app = express();

app.get("/", (req, res) => {
  res.send('<h1>Home page</h1> <a href="/api/products">Products<a/>');
});
//sending products as json
app.get("/api/products", (req, res) => {
  // filtering data to send
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
