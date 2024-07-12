// routes/marks.js
import {
  getMarks,
  addMarks,
  external,
} from "../controllers/marksController.js";
import express from "express";
const router = express.Router();

router.get("/:studentId", getMarks);
router.post("/:studentId", addMarks);
router.post("/percentage/:studentId",external);

export default router;
