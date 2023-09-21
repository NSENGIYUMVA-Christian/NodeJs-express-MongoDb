const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError } = require("../errors");

const register = async (req, res) => {
  const user = await User.create({ ...req.body });
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  // check if email and password is provided
  if (!email || !password) {
    throw new BadRequestError("PLease provide email and password ");
  }
  // check user if exist in DB
  const user = await User.findOne({ email });

  //if no user
  if (!user) {
    throw new UnauthenticatedError("invalid credentials");
  }
  // compare password
  const isPasswordCorrect = await user.comparePassword(password);
  //if password incorrect
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError("invalid credentials");
  }
  //if user exist
  const token = user.createJWT();
  res.status(StatusCodes.OK).json({ user: { name: user.name }, token });
};

module.exports = { register, login };
