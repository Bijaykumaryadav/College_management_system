import mongoose from "mongoose";

const marksSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  subjectCode: {
    type: String,
    required: true,
  },
  examType: {
    type: String,
    enum: ["internal", "external"],
    required: true,
  },
  internalType: {
    type: String,
    enum: ["I INTERNAL", "II INTERNAL", "III INTERNAL"],
    required: false,
  },
  marks: {
    type: Number,
    required: true,
  },
  fullMarks: {
    type: Number,
    required: true,
  },
  passFail: {
    type: String,
    enum: ["pass", "fail"],
  },
});

export const Marks = mongoose.model("Marks", marksSchema);
