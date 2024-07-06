import { Student } from "../models/studentSchema.js";
import { handleValidationError } from "../middlewares/errorHandler.js";

export const createStudent = async (req, res, next) => {
  console.log(req.body);
  const { name, email, phone, registrationNumber, grade } = req.body;
  try {
    if (!name || !grade) {
      return next("Please Fill Full Form!", 400);
    }
    await Student.create({ name, email, phone, registrationNumber, grade });
    res.status(200).json({
      success: true,
      message: "Student Created!",
    });
  } catch (err) {
    next(err);
  }
};

export const getAllStudents = async (req, res, next) => {
  try {
    const students = await Student.find();
    res.status(200).json({
      success: true,
      students,
    });
  } catch (err) {
    next(err);
  }
};
