const product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
  const products = await product.find({});
  res.status(200).json({ products, amountOfProducts: products.length });
};

const getAllProducts = async (req, res) => {
  //console.log(req.query);
  const { featured, company, name } = req.query;
  const queryObject = {};

  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }
  if (company) {
    queryObject.company = company;
  }
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }
  console.log(queryObject);

  const products = await product.find(queryObject);
  res.status(200).json({ products, amountOfProducts: products.length });
};

module.exports = { getAllProductsStatic, getAllProducts };
