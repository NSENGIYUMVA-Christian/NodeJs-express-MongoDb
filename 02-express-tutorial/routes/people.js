const express = require("express");
const router = express.Router();

const {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
} = require("../controllers/people");

// getting all data
router.get("/", getPeople);

// post method on js frontend request
router.post("/", createPerson);

// extra example to practice postman
router.post("/postman", createPersonPostman);

// put method (edit or updating data)
router.put("/:id", updatePerson);

// delete method
router.delete("/:id", deletePerson);

module.exports = router;
