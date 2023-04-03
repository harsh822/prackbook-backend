const mongoose = require("mongoose");

const exams = new mongoose.Schema({
  name: String,
  subject: String,
  duration: Number,
  objMarks: Number,
  codingMarks: Number,
  year: String,
  section: String,
  time: String,
  date: String,
  questionIds: [String],
  objectCount: Number,
  codingCount: Number,
  completed: Boolean,
});
module.exports = mongoose.model("exams", exams);
