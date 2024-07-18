import express from "express";
import {
  createAssignment,
  getAllAssignments,
  assignmentSubmit,
} from "../controllers/assignmentController.js";

const router = express.Router();

router.post("/", createAssignment);
router.get("/getall", getAllAssignments);
router.post("/submit", assignmentSubmit);

export default router;
