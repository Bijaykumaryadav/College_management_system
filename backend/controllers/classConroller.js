import { Class } from "../models/classSchema.js";
import { handleValidationError } from "../middlewares/errorHandler.js";

export const createClass = async (req, res, next) => {
  console.log(req.body);
  const { grade, department, semester, section, subSection } = req.body;

  try {
    if (!grade || !department || !semester || !section) {
      return handleValidationError("Please Fill Form!", 400);
    }

    const newClass = await Class.create({
      grade,
      department,
      semester,
      section,
      subSection,
    });

    res.status(200).json({
      success: true,
      message: "Class Created!",
      class: newClass,
    });
  } catch (err) {
    console.log("Error is:",err);
    next(err);
  }
};

export const getAllClasses = async (req, res, next) => {
  try {
    const classes = await Class.find();
    res.status(200).json({
      success: true,
      classes,
    });
  } catch (err) {
    next(err);
  }
};
