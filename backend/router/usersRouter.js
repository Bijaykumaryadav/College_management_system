import express from "express";
import {
  studentSignIn,
  teacherSignIn,
} from "../controllers/usersController.js";

import { studentRegister } from "../controllers/studentRegisterController.js";
import { teacherRegister } from "../controllers/teacherRegisterController.js";
import adminAuth from "../middlewares/adminAuth.js";
import studentAuth from "../middlewares/studentAuth.js";
import teacherAuth from "../middlewares/teacherAuth.js";

const router = express.Router();

router.post("/students", studentRegister);
router.post("/teachers", teacherRegister);
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

export default router;
