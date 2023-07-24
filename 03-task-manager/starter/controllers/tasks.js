const Task = require("../models/task");

const getAllTasks = (req, res) => {
  res.send("All items");
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: "There was an internal server error" });
  }
};
const getTask = (req, res) => {
  res.send("get single task");
};
const updateTask = (req, res) => {
  res.send("update task");
};
const deleteTask = (req, res) => {
  res.send("delete task");
};

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
