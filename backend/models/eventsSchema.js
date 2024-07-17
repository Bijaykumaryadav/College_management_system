import mongoose from "mongoose";

const eventsSchema = new mongoose.Schema({
  event: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

export const Events = mongoose.model("Events", eventsSchema);
