import {
  getMarks,
  addMarks,
  external,
  fetchExternal,
} from "../controllers/marksController.js";
import express from "express";
const router = express.Router();

router.get("/:studentId", getMarks);
router.post("/:studentId", addMarks);
router.post("/percentage/:studentId", external);
router.get("/percentage/:studentId", fetchExternal); //routes for fetching percentage for performance

export default router;
