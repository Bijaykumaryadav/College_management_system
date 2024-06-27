import express from "express";
import {
  studentSignIn,
  teacherSignIn,
} from "../controllers/usersController.js";
import { studentRegister } from "../controllers/studentRegisterController.js";
import { teacherRegister } from "../controllers/teacherRegisterController.js";

const router = express.Router();

router.post("/students", studentRegister);
router.post("/teachers",teacherRegister);
router.post("/student/signin", studentSignIn);
router.post("/teacher/signin", teacherSignIn);

export default router;
