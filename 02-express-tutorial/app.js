// localhost:5000
const express = require("express");
const app = express();
const people = require("./routes/people");
const autho = require("./routes/autho");

// our static asset---- launching our frontend app
app.use(express.static("./methods-public"));

//getting form data from raw html
app.use(express.urlencoded({ extended: false }));

// parsing incoming json data from js frontend
app.use(express.json());

//handling request with "/api/people"
app.use("/api/people", people);

//handling login request
app.use("/login", autho);

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
