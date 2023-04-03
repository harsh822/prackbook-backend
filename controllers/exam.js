import examsModel from "../models/exams.model.js";

const addExam = async (req, res) => {
  const exam = new examsModel(req.body);
  try {
    await exam.save();
    res.status(200).json({
      message: "exam added",
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};
const getExamById = async (req, res) => {
  try {
    const exam = await examsModel.findById({ _id: req.headers.id });
    res.status(200).json(exam);
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
};
const deleteOneByID = async (req, res) => {
  try {
    const exam = await examsModel.findByIdAndDelete(req.body.id);
    res.status(200).json(exam);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

export { addExam, getExamById, deleteOneByID };
