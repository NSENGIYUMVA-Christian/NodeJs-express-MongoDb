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

// extra example to practice postman
app.post("/api/postman/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, data: "Please provide user name" });
  } else {
    return res.status(200).json({ success: true, data: [...people, name] });
  }
});

// post method on traditional html forms
app.post("/login", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(401).send("Please provide credentials");
  } else return res.status(200).send(`welcome ${name}`);
});

// put method (edit or updating data)
app.put("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const person = people.find((eachPerson) => eachPerson.id === Number(id));

  if (!person) {
    return res
      .status(404)
      .json({ message: false, msg: `No person with id ${id}` });
  }
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });

  res.status(200).json({ success: true, data: newPeople });
});

// delete method
app.delete("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const person = people.find((eachPerson) => eachPerson.id === Number(id));

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `No person with id ${id}` });
  }
  const newPeople = people.filter((person) => person.id !== Number(id));

  res.status(200).json({ success: true, data: newPeople });
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
