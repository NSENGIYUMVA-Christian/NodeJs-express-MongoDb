const product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
  const products = await product.find({}).sort("name price");
  res.status(200).json({ products, amountOfProducts: products.length });
};

const getAllProducts = async (req, res) => {
  //console.log(req.query);
  const { featured, company, name, sort } = req.query;
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

  let result = product.find(queryObject);
  if (sort) {
    const sortList = sort.split(",").join(" ");
    result = result.sort(sortList);
  } else {
    result = result.sort("createdAt");
  }
  const products = await result;

  res.status(200).json({ products, amountOfProducts: products.length });
};

module.exports = { getAllProductsStatic, getAllProducts };
