const User = require("../model/User");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");
const { createJwt } = require("../utils");
////////////////register user///////////
const register = async (req, res) => {
  const { name, email, password } = req.body;
  //check if email exist
  const emailAlreadyExist = await User.findOne({ name, email, password });
  if (emailAlreadyExist) {
    throw new CustomError.BadRequestError("Email already exist");
  }
  // create user in DB
  const user = await User.create(req.body);
  // create a token
  const tokenUser = { name: user.name, userId: user._id, role: user.role };
  const token = createJwt({ payload: tokenUser });
  // send cookie
  const oneDay = 1000 * 60 * 60 * 24;
  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
  });
  // main return
  res.status(StatusCodes.CREATED).json({ user: tokenUser });
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
