const User = require("../model/User");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");

////////////////register user///////////
const register = async (req, res) => {
  const { email } = req.body;
  //check if email exist
  const emailAlreadyExist = await User.findOne({ email });
  if (emailAlreadyExist) {
    throw new CustomError.BadRequestError("Email already exist");
  }

  const user = await User.create(req.body);
  res.status(StatusCodes.CREATED).json({ user });
};

///////////////login user///////////
const login = async (req, res) => {
  res.send("login user");
};

///////////////logout user///////////
const logout = async (req, res) => {
  res.send("logout user");
};

module.exports = { register, login, logout };
