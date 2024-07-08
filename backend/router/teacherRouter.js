import express from "express";

import {
  createTeacher,
  getAllTeachers,
  getLoggedInTeacher,
} from "../controllers/teacherController.js";

const router = express.Router();

router.get("/getall", getAllTeachers);
router.post("/", createTeacher);
router.get("/", getLoggedInTeacher);

export default router;
