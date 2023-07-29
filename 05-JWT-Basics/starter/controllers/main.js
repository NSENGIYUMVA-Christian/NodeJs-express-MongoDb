//require("dotenv").config();

//importing jwt
const jwt = require("jsonwebtoken");

// custom error
const CustomAPIError = require("../errors/custom-error");

const login = async (req, res) => {
  const { username, password } = req.body;

  // check if username not provided
  if (!username || !password) {
    throw new CustomAPIError("PLease provide email and password", 400);
  }

  // id all value are provided
  // temp id
  const id = new Date().getDate();

  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.status(200).json({ msg: "user created", token });
};

const dashboard = async (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new CustomAPIError("No token provided ", 401);
  }
  // get token
  const token = authHeader.split(" ")[1];

  // verifying token from frontend if it matches
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);
    const luckyNumber = Math.floor(Math.random() * 100);
    res.status(200).json({
      msg: `Hello ${decoded.username}`,
      secret: ` Here is your authorized data, you lucky number is ${luckyNumber}`,
    });
  } catch (error) {
    throw new CustomAPIError("Not authorized to access this route ", 401);
  }
};

module.exports = { login, dashboard };
