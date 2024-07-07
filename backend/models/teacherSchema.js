import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  qualification: {
    type: String,
    required: false,
  },
  department: {
    type: String,
    required: false,
    enum: [
      "COMPUTER SCIENCE ENGINEERING",
      "ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING",
      "CIVIL ENGINEERING",
      "ELECTRICAL AND COMMUNICATION ENGINEERING",
    ],
  },
  position: {
    type: String,
    required: false,
    enum: ["Assistant Professor", "Associate Professor"],
  },
  subjectCodes: {
    type: [String],
    required: false,
  },
});

export const Teacher = mongoose.model("Teacher", teacherSchema);
