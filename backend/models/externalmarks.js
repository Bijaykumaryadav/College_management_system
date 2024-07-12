import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
    _id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
    },
  externalPercentage: {
    type: Number,
    default: null,
  },
});

export const percentage = mongoose.model("percentage", StudentSchema);
