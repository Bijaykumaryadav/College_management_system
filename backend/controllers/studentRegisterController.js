import { studentCredential } from "../models/studentRegisterSchema.js";
import { handleValidationError } from "../middlewares/errorHandler.js";

export const studentRegister = async (req, res, next) => {
  console.log(req.body);
  const { name, email, password } = req.body;
  try {
    if ((!name, !email, !password)) {
      return handleValidationError("Please Fill Form!", 400);
    }

    //check if student already exists in the database
    const existingStudent = await studentCredential.findOne({ email });
    if (existingStudent) {
      return res
        .status(400)
        .json({ success: false, message: "Student already exists" });
    }

    await studentCredential.create({ name, email, password });
    res
      .status(200)
      .json({ success: true, message: "Students Credential Created!" });
  } catch (err) {
    next(err);
  }
};
