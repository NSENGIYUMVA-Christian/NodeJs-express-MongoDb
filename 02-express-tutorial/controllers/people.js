let { people } = require("../data");

// getall people
const getPeople = (req, res) => {
  return res.status(200).json({ success: true, data: people });
};

// create person
const createPerson = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please provide name value" });
  }

  return res.status(201).json({ success: true, person: name });
};

//createPersonPostman
const createPersonPostman = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, data: "Please provide user name" });
  } else {
    return res.status(200).json({ success: true, data: [...people, name] });
  }
};

//UpdatePerson
const updatePerson = (req, res) => {
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
};

// delete person
const deletePerson = (req, res) => {
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
};

module.exports = {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
};
