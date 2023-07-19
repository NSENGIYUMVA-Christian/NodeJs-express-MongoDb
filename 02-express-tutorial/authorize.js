const authorize = (req, res, next) => {
  console.log("Authorize");
  const { user } = req.query;
  if (user === "Chris") {
    req.user = { name: "Chris", id: 1 };
    next();
  } else {
    res.status(401).send("Your are not authorized");
  }

  next();
};

module.exports = authorize;
