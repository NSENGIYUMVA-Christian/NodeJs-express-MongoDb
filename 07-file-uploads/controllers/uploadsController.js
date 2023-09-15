const path = require("path");

const Product = require("../models/Product");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");
const cloudinary = require("cloudinary").v2;
//import to remove temp in if we successfully uploaded images to cloud
const fs = require("fs");

// local uploads
const uploadProductImageLocal = async (req, res) => {
  // check if file exist
  if (!req.files) {
    throw new CustomError.BadRequestError("No file uploaded");
  }

  const productImage = req.files.image;
  // check format
  if (!productImage.mimetype.startsWith("image")) {
    throw new CustomError.BadRequestError("Please upload image");
  }
  // check size
  const maxSize = 1024 * 1024;

  if (productImage.size > maxSize) {
    throw new CustomError.BadRequestError(
      `please upload image smaller than 1kb`
    );
  }

  // if we successfully get the correct image
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

// upload on cloud
const uploadProductImage = async (req, res) => {
  const timestamp = Date.now();
  const result = await cloudinary.uploader.upload(
    req.files.image.tempFilePath,
    {
      use_filename: true,
      folder: "file-upload-proj",
      timestamp,
    }
  );
  // delete temp if we success
  fs.unlinkSync(req.files.image.tempFilePath);

  return res.status(StatusCodes.OK).json({ image: { scr: result.secure_url } });
};

module.exports = { uploadProductImage };
