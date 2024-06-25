import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import validator from "validator";

const studentRegisterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  isAdminApproved: {
    type: Boolean,
    default: false,
  }
});

// Pre-save hook to hash the password
studentRegisterSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// Method to check password
studentRegisterSchema.methods.isValidPassword = async function (
  enteredPassword
) {
  return await bcrypt.compare(enteredPassword, this.password);
};

export const studentCredential = mongoose.model(
  "studentCredential",
  studentRegisterSchema
);
