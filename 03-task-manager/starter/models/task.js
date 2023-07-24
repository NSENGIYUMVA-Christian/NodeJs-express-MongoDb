const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  //basic validation to avoid restricted behaviors for instance in our project, adding empty values to our database
  name: {
    type: String,
    required: [true, "Must provide a name"],
    trim: true,
    maxLength: [20, "Name can not be more than 20 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Task", taskSchema);
