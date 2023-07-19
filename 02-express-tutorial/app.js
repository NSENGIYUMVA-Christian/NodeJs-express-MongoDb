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
//Sending product based on specified Id
app.get("/api/products/:productId", (req, res) => {
  // filtering data to send
  const singleProduct = products.find((product) => {
    return product.id === Number(req.params.productId);
  });
  if (!singleProduct) {
    return res
      .status(404)
      .send(`Sorry,the products with ${req.params.productId} doesn't exist`);
  }
  res.json(singleProduct);
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
