const CustomAPIError = require("../errors/custom-error");

const login = async (req, res) => {
  const { username, password } = req.body;
  //console.log(username, password);
  // check if username not provided
  if (!username || !password) {
    throw new CustomAPIError("PLease provide email and password", 400);
  }

  res.send(" Fake Login/Register/Signup Route");
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello john doe`,
    secret: ` Here is your authorized data, you lucky number is ${luckyNumber}`,
  });
};

module.exports = { login, dashboard };
