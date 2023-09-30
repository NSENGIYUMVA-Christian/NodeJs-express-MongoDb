const mongoose = require("mongoose");
// Set strictQuery to false to prepare for Mongoose 7
mongoose.set("strictQuery", false);

const connectDB = (url) => {
  return mongoose.connect(url);
};

module.exports = connectDB;
