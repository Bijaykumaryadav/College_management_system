import { Exam } from "../models/examSchema.js";
import { handleValidationError } from "../middlewares/errorHandler.js";

export const addExam = async (req, res, next) => {
  console.log(req.body);
  const { name, registrationNumber, className, marks } = req.body;
  try {
    if (!name || !registrationNumber || !className || !marks) {
      return res.status(400).json({
        success: false,
        message: "Please fill out all fields!",
      });
    }
    const newExam = await Exam.create({
      name,
      registrationNumber,
      className,
      marks,
    });
    res.status(200).json({
      success: true,
      exam: newExam,
      message: "A new exam has been added!",
    });
  } catch (err) {
    next(err);
  }
};

export const getAllExams = async (req, res, next) => {
  try {
    const exams = await Exam.find();
    res.status(200).json({
      success: true,
      exams,
    });
  } catch (err) {
    next(err);
  }
};
