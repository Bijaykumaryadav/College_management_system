import { Student } from "../models/studentSchema.js";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

export const createStudent = async (req, res, next) => {
  console.log(req.body);
  const {
    _id,
    name,
    email,
    phone,
    registrationNumber,
    grade,
    section,
    subSection,
  } = req.body;

  try {
    if (
      !name ||
      !grade ||
      !phone ||
      !email ||
      !registrationNumber ||
      !section
    ) {
      return res
        .status(400)
        .json({ message: "Please fill in all required fields!" });
    }

    // Validate or generate ObjectId
    const studentId = _id ? new mongoose.Types.ObjectId(_id) : undefined;

    const newStudent = await Student.create({
      _id: studentId,
      name,
      email,
      phone,
      registrationNumber,
      grade,
      section,
      subSection,
    });

    res.status(200).json({
      success: true,
      message: "Student created successfully!",
      data: newStudent,
    });
  } catch (err) {
    console.log("Error in createStudent:", err);
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

export const getLoggedInStudent = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Authentication failed!" });
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const studentId = decodedToken._id;

    const student = await Student.findById(studentId);
    console.log("student id: ", studentId);
    console.log("student: ", student);

    if (!student) {
      return res.status(200).json({
        success: true,
        data: {
          name: null,
          email: null,
          phone: null,
          grade: null,
          registrationNumber: null,
          section: null,
          subSection: null,
        },
      });
    }

    console.log("phone is:", student.phone);
    res.status(200).json({
      success: true,
      data: {
        name: student.name,
        email: student.email,
        phone: student.phone,
        grade: student.grade,
        registrationNumber: student.registrationNumber,
        section: student.section,
        subSection: student.subSection,
      },
    });
  } catch (err) {
    console.log("Error is: ", err);
    next(err);
  }
};
