import jwt from "jsonwebtoken";
import { teacherCredential } from "../models/teacherRegisterSchema.js";

const teacherAuth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "").trim();
    if (!token) {
      throw new Error("Authorization failed: No token provided");
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const teacher = await teacherCredential.findOne({
      _id: decoded._id,
      "tokens.token": token,
    });

    if (!teacher) {
      throw new Error("Authorization failed: teacher not found");
    }

    req.token = token;
    req.teacher = teacher;
    next();
  } catch (error) {
    console.error("Authentication failed:", error.message);
    res.status(401).send({ success: false, message: "Please authenticate." });
  }
};

export default teacherAuth;
