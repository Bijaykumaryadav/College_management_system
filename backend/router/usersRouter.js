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
} from "../controllers/usersController.js";
import passport from "passport";
const router = express.Router();

router.post("/admins", adminRegister);
router.post("/students", studentRegister);
router.post("/teachers", teacherRegister);
router.post("/admin/signin", adminSignIn);
router.post("/student/signin", studentSignIn);
router.post("/teacher/signin", teacherSignIn);
router.get("/auth/admin/check", adminAuth, (req, res) => {
  res.status(200).json({ success: true, message: "Authenticated" });
});

router.get("/auth/students/check", studentAuth, (req, res) => {
  res.status(200).json({ success: true, message: "Authenticated" });
});

router.get("/auth/teachers/check", teacherAuth, (req, res) => {
  res.status(200).json({ success: true, message: "Authenticated" });
});

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  googleSignUp
);

export default router;
