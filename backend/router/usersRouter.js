import express from "express";
import { adminRegister } from "../controllers/adminRegisterController.js";
import { studentRegister } from "../controllers/studentRegisterController.js";
import { teacherRegister } from "../controllers/teacherRegisterController.js";
import adminAuth from "../middlewares/adminAuth.js";
import studentAuth from "../middlewares/studentAuth.js";
import teacherAuth from "../middlewares/teacherAuth.js";

import {
  adminSignIn,
  studentSignIn,
  teacherSignIn,
  googleSignUp,
  googleTeacherSignUp,
  googleStudentSignUp,
  getAdmins,       
} from "../controllers/usersController.js";
import passport from "passport";

const router = express.Router();

// Registration routes
router.post("/admins", adminRegister);
router.post("/students", studentRegister);
router.post("/teachers", teacherRegister);

// Sign-in routes
router.post("/admin/signin", adminSignIn);
router.post("/student/signin", studentSignIn);
router.post("/teacher/signin", teacherSignIn);

router.get("/admins", adminAuth, getAdmins); // Apply adminAuth middleware

// Authentication check routes
router.get("/auth/admin/check", adminAuth, (req, res) => {
  res.status(200).json({ success: true, message: "Authenticated" });
});

router.get("/auth/students/check", studentAuth, (req, res) => {
  res.status(200).json({ success: true, message: "Authenticated" });
});

router.get("/auth/teachers/check", teacherAuth, (req, res) => {
  res.status(200).json({ success: true, message: "Authenticated" });
});

// Google OAuth routes for admins
router.get(
  "/auth/google",
  passport.authenticate("google-admin", { scope: ["profile", "email"] })
);
router.get(
  "/auth/google/callback",
  passport.authenticate("google-admin", { failureRedirect: "/" }),
  googleSignUp
);

// Google OAuth routes for teachers
router.get(
  "/auth/google-teacher",
  passport.authenticate("google-teacher", { scope: ["profile", "email"] })
);
router.get(
  "/auth/google-teacher/callback",
  passport.authenticate("google-teacher", { failureRedirect: "/" }),
  googleTeacherSignUp
);

//Google Oauth routes for students
router.get(
  "/auth/google-student",
  passport.authenticate("google-student", { scope: ["profile", "email"] })
);
router.get(
  "/auth/google-student/callback",
  passport.authenticate("google-student", { failureRedirect: "/" }),
  googleStudentSignUp
);

export default router;
