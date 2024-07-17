import mongoose from "mongoose";
import validator from "validator";

const announcementSchema = new mongoose.Schema({
  announcement: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now, // Example default date value
  },
});

export const Announcement = mongoose.model("Announcement", announcementSchema);
