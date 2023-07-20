const express = require("express");
let { people } = require("../data");
const router = express.Router();

// getting all data
router.get("/", (req, res) => {
  return res.status(200).json({ success: true, data: people });
});

// post method on js frontend request
router.post("/", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please provide name value" });
  }

  return res.status(201).json({ success: true, person: name });
});

// extra example to practice postman
router.post("/postman", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, data: "Please provide user name" });
  } else {
    return res.status(200).json({ success: true, data: [...people, name] });
  }
});

// put method (edit or updating data)
router.put("/:id", (req, res) => {
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
router.delete("/:id", (req, res) => {
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

module.exports = router;
