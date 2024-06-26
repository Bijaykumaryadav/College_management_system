// Example backend route definition
import express from "express";
import adminAuth from "../middlewares/adminAuth.js";

const router = express.Router();

router.get("/auth/check", adminAuth, (req, res) => {
  res.status(200).json({ success: true, message: "Authenticated" });
});
router.get("/dashboard", adminAuth, (req, res) => {
  // If middleware adminAuth passes, proceed to handle the request
  // req.admin should contain the authenticated admin object
  res.json({ success: true, message: "Admin dashboard accessed successfully" });
});

export default router;
