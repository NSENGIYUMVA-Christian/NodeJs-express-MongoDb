const product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
  const products = await product.find({});
  res.status(200).json({ products, amountOfProducts: products.length });
};

const getAllProducts = async (req, res) => {
  console.log(req.query);
  const { featured } = req.query;
  const queryObject = {};
  console.log(queryObject);
  if (featured) {
    queryObject.featured = featured === true ? true : false;
  }

  const products = await product.find(queryObject);
  res.status(200).json({ products, amountOfProducts: products.length });
};

module.exports = { getAllProductsStatic, getAllProducts };
