const jwt = require("jsonwebtoken");
const { BadRequest } = require("../errors");

const login = async (req, res) => {
  const { username, password } = req.body;

  // check if username not provided
  if (!username || !password) {
    throw new BadRequest("PLease provide email and password");
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
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello ${req.user.username}`,
    secret: ` Here is your authorized data, you lucky number is ${luckyNumber}`,
  });
};

module.exports = { login, dashboard };
