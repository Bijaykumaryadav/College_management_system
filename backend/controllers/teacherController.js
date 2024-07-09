import { Teacher } from "../models/teacherSchema.js";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { handleValidationError } from "../middlewares/errorHandler.js";


export const createTeacher = async (req, res, next) => {
  const {
    _id,
    name,
    email,
    phone,
    address,
    qualification,
    department,
    position,
    subjectCodes,
  } = req.body;

  try {
    if (
      !name ||
      !email ||
      !phone ||
      !address ||
      !qualification ||
      !department ||
      !position ||
      !subjectCodes
    ) {
      return handleValidationError("Please fill in all required fields!", 400);
    }

    // Validate or generate ObjectId
    const teacherId = _id ? new mongoose.Types.ObjectId(_id) : undefined;

    await Teacher.create({
      _id: teacherId,
      name,
      email,
      phone,
      address,
      qualification,
      department,
      position,
      subjectCodes,
    });

    res.status(200).json({
      success: true,
      message: "Teacher created successfully!",
    });
  } catch (err) {
    next(err);
  }
};

// Get all teachers
export const getAllTeachers = async (req, res, next) => {
  try {
    const teachers = await Teacher.find();
    res.status(200).json({
      success: true,
      teachers,
    });
  } catch (err) {
    next(err);
  }
};

// Get logged-in teacher
export const getLoggedInTeacher = async (req, res, next) => {
  try {
    // Extract token from headers
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Authentication failed!" });
    }

    // Decode the token to get the teacher ID
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const teacherId = decodedToken._id;

    // Fetch the teacher information using the teacher ID
    const teacher = await Teacher.findById(teacherId);
    console.log("teacher id: ", teacherId);
    console.log("teacher: ", teacher);

    if (!teacher) {
      return res.status(200).json({
        success: true,
        data: {
          name: null,
          email: null,
          phone: null,
          address: null,
          qualification: null,
          department: null,
          position: null,
          subjectCodes: null,
        },
      });
    }

    console.log("phone is:", teacher.phone);
    res.status(200).json({
      success: true,
      data: {
        name: teacher.name,
        email: teacher.email,
        phone: teacher.phone,
        address: teacher.address,
        qualification: teacher.qualification,
        department: teacher.department,
        position: teacher.position,
        subjectCodes: teacher.subjectCodes,
      },
    });
  } catch (err) {
    console.log("Error is ", err);
    next(err);
  }
};
