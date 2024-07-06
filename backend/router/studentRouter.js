import express from "express";
import {
  getAllStudents,
  createStudent,
  getLoggedInStudent,
} from "../controllers/studentController.js";

const router = express.Router();

router.get("/getall", getAllStudents);
router.post("/", createStudent);
router.get("/", getLoggedInStudent);

export default router;
