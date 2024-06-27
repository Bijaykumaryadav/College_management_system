import jwt from "jsonwebtoken";
import { studentCredential } from "../models/studentRegisterSchema.js";

const studentAuth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "").trim();
    if (!token) {
      throw new Error("Authorization failed: No token provided");
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const student = await studentCredential.findOne({
      _id: decoded._id,
      "tokens.token": token,
    });

    if (!student) {
      throw new Error("Authorization failed: student not found");
    }

    req.token = token;
    req.student = student;
    next();
  } catch (error) {
    console.error("Authentication failed:", error.message);
    res.status(401).send({ success: false, message: "Please authenticate." });
  }
};

export default studentAuth;
