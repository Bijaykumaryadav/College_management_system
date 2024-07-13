import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Marks",
    required: true,
  },
  externalPercentage: {
    type: Number,
    default: null,
  },
});

export const percentage = mongoose.model("percentage", StudentSchema);
