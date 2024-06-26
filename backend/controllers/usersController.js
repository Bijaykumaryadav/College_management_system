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

  // Stringify user data for the query parameter
  const queryParams = new URLSearchParams({ token }).toString();

  // Correctly append the token as a query parameter
  res.redirect(`${process.env.FRONTEND_URL}/student/dashboard?${queryParams}`);
};
