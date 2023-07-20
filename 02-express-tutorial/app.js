// localhost:5000
const express = require("express");
let { people } = require("./data");
const app = express();

// our static asset---- launching our frontend app
app.use(express.static("./methods-public"));

//getting form data from raw html
app.use(express.urlencoded({ extended: false }));

// parsing incoming json data from js frontend
app.use(express.json());

app.get("/api/people", (req, res) => {
  return res.status(200).json({ success: true, data: people });
});

// post method on js frontend request
app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please provide name value" });
  }

  return res.status(201).json({ success: true, person: name });
});

// post method on traditional html forms
app.post("/login", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(401).send("Please provide credentials");
  } else return res.status(200).send(`welcome ${name}`);
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
