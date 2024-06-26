import jwt from "jsonwebtoken";
import { AdminRegister } from "../models/adminRegisterSchema.js";

const adminAuth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    if (!token) {
      throw new Error("Authorization failed: No token provided");
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const admin = await AdminRegister.findOne({
      _id: decoded._id,
      "tokens.token": token,
    });


    if (!admin) {
      throw new Error("Authorization failed: Admin not found");
    }

    req.token = token;
    req.admin = admin;
    next();
  } catch (error) {
    console.error("Authentication failed:", error.message);
    res.status(401).send({ success: false, message: "Please authenticate." });
  }
};

export default adminAuth;
