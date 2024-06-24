import express from "express";
import {
  studentSignIn,
  teacherSignIn,
} from "../controllers/usersController.js";
// import { adminRegister } from "../controllers/adminRegisterController.js";

const router = express.Router();

router.post("/student/signin", studentSignIn);
router.post("/teacher/signin", teacherSignIn);
// router.post("/admin/register", adminRegister);

export default router;
