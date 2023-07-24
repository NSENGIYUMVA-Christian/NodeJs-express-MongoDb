const Task = require("../models/task");
const asyncWrapper = require("../middleware/async");

/////////////////////// getting all tasks //////////////////
const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
  // res.status(500).json({ msg: "There was an internal server error" });
});

//////////////////////// Create task////////////////////
const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
  // res.status(500).json({ msg: "There was an internal server error" });
});

//////////////////////// Get task////////////////////
const getTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });
  // if incorrect id or id not provided
  if (!task) {
    return res.status(404).json({ msg: `no task with id : ${taskID}` });
  }

  res.status(200).json({ task });

  // res.status(500).json({ msg: "There was an internal server error" });
});

//////////////////////Delete task/////////////////////
const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskId });

  // if incorrect id or id not provided
  if (!task) {
    return res.status(404).json({ msg: `no task with id : ${taskId}` });
  }

  res.status(200).json({ task });

  //res.status(500).json({ msg: "There was an internal server error" });
});

////////////////////////Update task///////////////////////
const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;

  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });
  // if incorrect id or id not provided
  if (!task) {
    return res.status(404).json({ msg: `no task with id : ${taskId}` });
  }

  res.status(200).json({ task });

  //res.status(500).json({ msg: "There was an internal server error" });

  //res.send("update task");
});

// the difference between put and patch is that by default put overwrites the db dta while patch change specified data only

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
