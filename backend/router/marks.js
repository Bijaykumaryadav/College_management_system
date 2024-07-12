// routes/marks.js
import {
  getMarks,
  addMarks,
  updateMarks,
} from "../controllers/marksController.js";
import express from "express";
const router = express.Router();


router.get("/:studentId", getMarks);
router.post("/:studentId", addMarks);
router.put("/:studentId/:subjectCode", updateMarks);

export default router;
