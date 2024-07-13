import mongoose from "mongoose";
import { Marks } from "../models/marks.js";
import { percentage } from "../models/externalmarks.js";

export const addMarks = async (req, res) => {
  const { studentId } = req.params;
  const { subjectCode, examType, internalType, marks, fullMarks, passFail } =
    req.body;

  try {
    const newMark = new Marks({
      studentId,
      subjectCode,
      examType,
      internalType,
      marks,
      fullMarks,
      passFail,
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
    console.log("marks is:", marks);
    res.status(200).json({ success: true, marks });
  } catch (error) {
    console.error("Error fetching marks:", error);
    res.status(500).json({ success: false, error: "Failed to fetch marks" });
  }
};

export const external = async (req, res) => {
  const { studentId } = req.params;
  const { externalPercentage } = req.body;

  try {
    const student = await percentage.findOne({ studentId });
    if (!student) {
      await percentage.create({
        studentId,
        externalPercentage,
      });
    } else {
      student.externalPercentage = externalPercentage;
      await student.save();
    }

    res.status(200).json({
      success: true,
      message: "External percentage updated successfully",
    });
  } catch (error) {
    console.error("Error updating external percentage:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Function to fetch the percentage based on student ID
export const fetchExternal = async (req, res) => {
  const { studentId } = req.params;

  try {
    // Find the percentage document with the given studentId
    const student = await percentage.findOne({ studentId });
    console.log("the student data is:", student);

    if (!student) {
      return res.status(404).send("Percentage not found");
    }

    res.status(200).json(student);
  } catch (error) {
    console.error("Error in fetching the percentage", error);
    res.status(500).send("Internal Server Error");
  }
};
