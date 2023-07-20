const express = require("express");

const router = express.Router();

// handling login
router.post("/", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(401).send("Please provide credentials");
  } else return res.status(200).send(`welcome ${name}`);
});

module.exports = router;
