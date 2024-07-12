import mongoose from "mongoose";

const marksSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student", // Reference to Student model
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
  },
  marks: {
    type: Number,
    required: true,
  },
  fullMarks: {
    type: Number,
    required: true,
  },
  // Other fields as needed
});


export const Marks= mongoose.model("Marks", marksSchema);
