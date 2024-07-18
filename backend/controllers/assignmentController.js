// assignmentController.js

import { Assignment } from "../models/assignmentSchema.js";
import { handleValidationError } from "../middlewares/errorHandler.js";
import { AssignmentSubmission } from "../models/AssignmentSubmission.js";

export const createAssignment = async (req, res, next) => {
  console.log(req.body);
  const {
    title,
    description,
    grade,
    department,
    semester,
    section,
    subSection,
    deadline,
  } = req.body;
  try {
    if (
      !title ||
      !description ||
      !grade ||
      !department ||
      !semester ||
      !section ||
      !deadline
    ) {
      handleValidationError("Please Fill Full Form!", 400);
    }
    await Assignment.create({
      title,
      description,
      grade,
      department,
      semester,
      section,
      subSection,
      deadline,
    });
    res.status(201).json({
      success: true,
      message: "Assignment Created!",
    });
  } catch (err) {
    next(err);
  }
};

export const getAllAssignments = async (req, res, next) => {
  try {
    const assignments = await Assignment.find();
    res.status(200).json({
      success: true,
      assignments,
    });
  } catch (err) {
    next(err);
  }
};

// Add a new endpoint for submitting assignments
export const assignmentSubmit = async (req, res) => {
  const { assignmentId, studentId, opinion } = req.body;

  try {
    const newSubmission = new AssignmentSubmission({
      assignmentId,
      studentId,
      opinion,
    });

    await newSubmission.save();

    res.status(200).json({ message: "Assignment submitted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error submitting assignment", error });
    console.log("Error in submitting assignments:",error);
  }
};
