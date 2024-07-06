import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  grade: {
    type: String,
    required: true,
  },
  registrationNumber: {
    type: String,
    unique: true,
    required: true,
  },
});

export const Student = mongoose.model("Student", studentSchema);
