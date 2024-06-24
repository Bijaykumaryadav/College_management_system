import mongoose from "mongoose";
import validator from "validator";

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
  },
  registrationNumber: {
    type: String,
    unique: true,
  },
  grade: {
    type: String,
    required: true,
  },
});

export const Student = mongoose.model("Student", studentSchema);
