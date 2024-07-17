import { Announcement } from "../models/announcementSchema.js";
import { handleValidationError } from "../middlewares/errorHandler.js";

export const createAnnouncement = async (req, res, next) => {
  const { announcement, date } = req.body;

  try {
    if (!announcement) {
      return handleValidationError("Please provide an announcement", 400);
    }

    const createdAnnouncement = await Announcement.create({
      announcement,
      date,
    });

    res.status(201).json({
      success: true,
      message: "Announcement created successfully",
      announcement: createdAnnouncement,
    });
  } catch (err) {
    next(err);
  }
};

export const getAllAnnouncements = async (req, res, next) => {
  try {
    const announcements = await Announcement.find().sort({ date: -1 }); // Sort by date descending

    res.status(200).json({
      success: true,
      announcements: announcements,
    });
  } catch (err) {
    next(err);
  }
};
