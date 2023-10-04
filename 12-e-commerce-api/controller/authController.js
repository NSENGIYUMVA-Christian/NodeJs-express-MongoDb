const User = require("../model/User");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");
const { attachCookiesToResponse } = require("../utils");
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

  //main return: send response and cookie
  attachCookiesToResponse({ res, user: tokenUser });
  // main return
  res.status(StatusCodes.CREATED).json({ user: tokenUser });
};

///////////////login user///////////
const login = async (req, res) => {
  // destructure email and password
  const { email, password } = req.body;
  //check is all provided
  if (!email || !password) {
    throw new CustomError.BadRequestError("Please provide email and password");
  }
  //if all provided, the check user from db
  const user = await User.findOne({ email });
  //if there is no user
  if (!user) {
    throw new CustomError.UnauthenticatedError("invalid credentials");
  }
  //compare password
  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new CustomError.UnauthenticatedError("invalid credentials");
  }
  //if the pw correct, create token and attach the cookie
  // create a token
  const tokenUser = { name: user.name, userId: user._id, role: user.role };

  // send response and cookie
  attachCookiesToResponse({ res, user: tokenUser });
  // main return
  res.status(StatusCodes.CREATED).json({ user: tokenUser });
};

///////////////logout user///////////
const logout = async (req, res) => {
  res.cookie("token", "logout", {
    httpOnly: true,
    expires: new Date(Date.now() + 5 * 1000), // Set the expiration date to a past date
  });
  // just for testing
  res.status(StatusCodes.OK).json({ msg: "log out successfully" });
};

module.exports = { register, login, logout };
