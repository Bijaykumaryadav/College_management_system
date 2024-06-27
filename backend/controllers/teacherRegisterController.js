import { teacherCredential } from "../models/teacherRegisterSchema.js";
import { handleValidationError } from "../middlewares/errorHandler.js";

export const teacherRegister = async (req, res, next) => {
  console.log(req.body);
  const { name, email, password } = req.body;
  try {
    if ((!name, !email, !password)) {
      return handleValidationError("Please Fill Form!", 400);
    }

    //check if teacher already exists in the database
    const existingTeacher = await teacherCredential.findOne({ email });
    if (existingTeacher) {
      return res
        .status(400)
        .json({ success: false, message: "teacher already exists" });
    }

    await teacherCredential.create({ name, email, password });
    res
      .status(200)
      .json({ success: true, message: "teacher Credential Created!" });
  } catch (err) {
    next(err);
  }
};
