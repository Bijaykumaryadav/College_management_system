import { Student } from "../models/studentSchema.js";
import jwt from "jsonwebtoken";

export const createStudent = async (req, res, next) => {
  console.log(req.body);
  const { _id, name, email, phone, registrationNumber, grade } = req.body;
  try {
    if (!name || !grade) {
      return next("Please Fill Full Form!", 400);
    }
    await Student.create({
      _id,
      name,
      email,
      phone,
      registrationNumber,
      grade,
    });
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

export const getLoggedInStudent = async (req, res, next) => {
  try {
    // Extract token from headers
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Authentication failed!" });
    }
    // Decode the token to get the student ID
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const studentId = decodedToken._id;

    // Fetch the student information using the student ID
    const student = await Student.findById(studentId);
    console.log("student id: ", studentId);
    if (!student) {
      return next("Student not found!", 404);
    }

    res.status(200).json({
      success: true,
      data: {
        name: student.name,
        email: student.email,
        phone: student.phone,
        grade: student.grade,
        registrationNumber: student.registrationNumber,
      },
    });
  } catch (err) {
    console.log("Error is ", err);
    next(err);
  }
};
