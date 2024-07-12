// routes/marks.js
import {
  getMarks,
  addMarks,
} from "../controllers/marksController.js";
import express from "express";
const router = express.Router();

router.get("/:studentId", getMarks);
router.post("/:studentId", addMarks);

export default router;
