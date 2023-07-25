const product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
  const products = await product.find({});
  res.status(200).json({ products, amountOfProducts: products.length });
};

const getAllProducts = async (req, res) => {
  console.log(req.query);

  const products = await product.find(req.query);
  res.status(200).json({ products, amountOfProducts: products.length });
};

module.exports = { getAllProductsStatic, getAllProducts };
