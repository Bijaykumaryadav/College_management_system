import { studentCredential } from "../models/studentRegisterSchema.js";
import { teacherCredential } from "../models/teacherRegisterSchema.js";
import { AdminRegister } from "../models/adminRegisterSchema.js";
import jwt from "jsonwebtoken";

export const adminSignIn = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Please provide email and password" });
    }

    console.log("JWT_SECRET:", process.env.JWT_SECRET);

    const existingAdmin = await AdminRegister.findOne({ email });
    if (!existingAdmin) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid email or password" });
    }

    const isPasswordValid = await existingAdmin.isValidPassword(password);
    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid email or password" });
    }

    const token = jwt.sign({ _id: existingAdmin._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    existingAdmin.tokens = existingAdmin.tokens.concat({ token });
    await existingAdmin.save();

    res
      .status(200)
      .json({ success: true, message: "Admin signed in successfully", token });
  } catch (err) {
    next(err);
  }
};

export const studentSignIn = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Please provide email and password" });
    }

    const existingStudent = await studentCredential.findOne({ email });
    if (!existingStudent) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid email or password" });
    }

    const isPasswordValid = await existingStudent.isValidPassword(password);
    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid email or password" });
    }

    const token = jwt.sign(
      { _id: existingStudent._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    existingStudent.tokens = existingStudent.tokens.concat({ token });
    await existingStudent.save();

    res.status(200).json({
      success: true,
      message: "Student signed in successfully",
      token,
    });
  } catch (err) {
    next(err);
  }
};

export const teacherSignIn = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Please provide email and password" });
    }

    const existingTeacher = await teacherCredential.findOne({ email });
    if (!existingTeacher) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid email or password" });
    }

    const isPasswordValid = await existingTeacher.isValidPassword(password);
    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid email or password" });
    }

    const token = jwt.sign(
      { _id: existingTeacher._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    existingTeacher.tokens = existingTeacher.tokens.concat({ token });
    await existingTeacher.save();

    res.status(200).json({
      success: true,
      message: "Teacher signed in successfully",
      token,
    });
  } catch (err) {
    next(err);
  }
};

export const googleSignUp = async (req, res) => {
  const { _id, name, email } = req.user;
  const token = jwt.sign({ _id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  req.user.tokens = req.user.tokens.concat({ token });
  await req.user.save();

  // Stringify user data for the query parameter
  const queryParams = new URLSearchParams({ token }).toString();

  // Correctly append the token as a query parameter
  res.redirect(`${process.env.FRONTEND_URL}/admin/dashboard?${queryParams}`);
};

// New Google sign-in controller for teachers
export const googleTeacherSignUp = async (req, res) => {
  const { _id, name, email } = req.user;
  const token = jwt.sign({ _id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  req.user.tokens = req.user.tokens.concat({ token });
  await req.user.save();

  // Stringify user data for the query parameter
  const queryParams = new URLSearchParams({ token }).toString();

  // Correctly append the token as a query parameter
  res.redirect(`${process.env.FRONTEND_URL}/teacher/dashboard?${queryParams}`);
};

// New Google sign-in controller for students
export const googleStudentSignUp = async (req, res) => {
  const { _id, name, email } = req.user;
  const token = jwt.sign({ _id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  req.user.tokens = req.user.tokens.concat({ token });
  await req.user.save();

  const queryParams = new URLSearchParams({ token }).toString();

  res.redirect(`${process.env.FRONTEND_URL}/student/dashboard?${queryParams}`);
};

export const getAdmins = async (req, res, next) => {
  try {
    const admin = req.admin;
    if (!admin) {
      return res
        .status(404)
        .json({ success: false, message: "Admin not found" });
    }
    res.status(200).json(admin);
  } catch (error) {
    next(error);
  }
};

export const getStudents = async (req, res, next) => {
  try {
    const student = req.student;
    console.log(student);
    if (!student) {
      return res
        .status(404)
        .json({ success: false, message: "Student not found" });
    }
    res.status(200).json(student);
  } catch (error) {
    next(error);
  }
};

export const getTeachers = async (req, res, next) => {
  try {
    const teacher = req.teacher;
    if (!teacher) {
      return res
        .status(404)
        .json({ success: false, message: "Teacher not found" });
    }
    res.status(200).json(teacher);
  } catch (error) {
    next(error);
  }
};

export const getId = async (req, res, next) => {
  try {
    const { _id,email, password } = req.body;
;
    if (!_id) {
      return res.status(404).json({ success: false, message: "Id not found" });
    }
    res.status(200).json(_id);
  } catch (error) {
    next(error);
  }
};
