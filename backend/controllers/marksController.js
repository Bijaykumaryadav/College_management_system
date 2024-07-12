// controllers/marksController.js

import { Marks } from "../models/marks.js";

// POST route to add marks
export const addMarks = async (req, res) => {
  const { studentId } = req.params;
  const { subjectCode, examType, internalType, marks, fullMarks } = req.body;

  try {
    const newMark = new Marks({
      studentId,
      subjectCode,
      examType,
      internalType,
      marks,
      fullMarks,   
    });

    await newMark.save();
    res
      .status(201)
      .json({ success: true, message: "Marks added successfully" });
  } catch (error) {
    console.error("Error adding marks:", error);
    res.status(500).json({ success: false, error: "Failed to add marks" });
  }
};

// GET route to fetch marks for a student
export const getMarks = async (req, res) => {
  const { studentId } = req.params;

  try {
    const marks = await Marks.find({ studentId });
    res.status(200).json({ success: true, marks });
  } catch (error) {
    console.error("Error fetching marks:", error);
    res.status(500).json({ success: false, error: "Failed to fetch marks" });
  }
};

