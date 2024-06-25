import express from "express";
import { studentRegister } from "../controllers/studentRegisterController.js";

const router = express.Router();

router.post("/students", studentRegister);

export default router;
