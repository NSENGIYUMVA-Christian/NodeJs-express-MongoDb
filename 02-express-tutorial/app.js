const express = require("express");

const app = express();

//app.get
// home page
app.get("/", (req, res) => {
  res.status(200).send("Home page");
});
// about page
app.get("/about", (req, res) => {
  res.status(200).send("about page");
});
// handles 404, like when user hits invalid url
app.all("*", (req, res) => {
  res.status(404).send("<h1>Resource not found<h1>");
});
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen

app.listen(5000, () => {
  console.log("Listening to port 5000");
});
