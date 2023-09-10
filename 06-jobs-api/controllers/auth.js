const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const register = async (req, res) => {
  //create a new user
  const user = await User.create({ ...req.body });
  res.status(StatusCodes.CREATED).json({ success: true, data: user });
};
const login = async (req, res) => {
  res.send("login user");
};

module.exports = { register, login };
