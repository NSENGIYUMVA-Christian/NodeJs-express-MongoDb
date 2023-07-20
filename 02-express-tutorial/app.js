// localhost:5000
const express = require("express");
let { people } = require("./data");
const app = express();

// our static asset---- launching our frontend app
app.use(express.static("./methods-public"));

//getting and parsing form data
app.use(express.urlencoded({ extended: false }));

app.get("/api/people", (req, res) => {
  return res.status(200).json({ success: true, data: people });
});

// post method
app.post("/login", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(401).send("Please provide credentials");
  } else return res.status(200).send(`welcome ${name}`);
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
