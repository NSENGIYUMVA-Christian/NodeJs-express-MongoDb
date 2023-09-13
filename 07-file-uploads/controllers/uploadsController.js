const path = require("path");

const Product = require("../models/Product");
const { StatusCodes } = require("http-status-codes");

const uploadProductImage = async (req, res) => {
  let productImage = req.files.image;

  const imagePath = path.join(
    __dirname,
    "../public/uploads/" + `${productImage.name}`
  );
  // run move function
  await productImage.mv(imagePath);
  res
    .status(StatusCodes.OK)
    .json({ image: { src: `/uploads/${productImage.name}` } });
};

module.exports = { uploadProductImage };
