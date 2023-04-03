import mongoose from "mongoose";

const objectiveProblem = new mongoose.Schema({
  topicName: String,
  questionId: String,
  question: String,
  option1: String,
  option2: String,
  option3: String,
  option4: String,
  answer: String,
});
module.exports = mongoose.model("objectiveProblem", objectiveProblem);
