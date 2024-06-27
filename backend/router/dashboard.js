// Example backend route definition
import express from "express";
import adminAuth from "../middlewares/adminAuth.js";
import studentAuth from "../middlewares/studentAuth.js";

const router = express.Router();

router.get("/auth/check", adminAuth, (req, res) => {
  res.status(200).json({ success: true, message: "Authenticated" });
});

router.get("/auth/students/check", studentAuth, (req, res) => {
  res.status(200).json({ success: true, message: "Authenticated" });
});

export default router;
