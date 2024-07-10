import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    grade: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
      enum: [
        "COMPUTER SCIENCE ENGINEERING",
        "ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING",
        "CIVIL ENGINEERING",
        "ELECTRONICS AND COMMUNICATION ENGINEERING",
      ],
    },
    semester: {
      type: String,
      required: true,
      enum: ["1", "2", "3", "4", "5", "6", "7", "8"],
    },
    section: {
      type: String,
      required: true,
      enum: ["P Cycle", "C Cycle", "A", "B", "C", "D", "E", "F"],
    },
    subSection: {
      type: String,
      required: false,
    },
    deadline: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Assignment = mongoose.model("Assignment", assignmentSchema);
