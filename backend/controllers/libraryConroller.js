import { Book } from "../models/librarySchema.js";
import { handleValidationError } from "../middlewares/errorHandler.js";

export const createBook = async (req, res, next) => {
  const { bookname, author } = req.body;
  try {
    if (!bookname || !author) {
      return handleValidationError("Please Fill Full Form!", 400);
    }
    const book = await Book.create({ bookname, author });
    res.status(200).json({
      success: true,
      message: "A new book is Created!",
      book, // Return the newly created book
    });
  } catch (err) {
    console.log("Error is:", err);
    next(err);
  }
};

export const getAllBooks = async (req, res, next) => {
  try {
    const books = await Book.find();
    res.status(200).json({
      success: true,
      books,
    });
  } catch (err) {
    next(err);
  }
};
