import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";

const adminRegisterSchema = new mongoose.Schema(
  {
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
    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

// Pre-save hook to hash the password
adminRegisterSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// Method to check password
adminRegisterSchema.methods.isValidPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Ensure tokens array is initialized as an empty array
adminRegisterSchema.pre("save", function (next) {
  if (!this.tokens) {
    this.tokens = [];
  }
  next();
});

export const AdminRegister =
  mongoose.models.AdminRegister ||
  mongoose.model("AdminRegister", adminRegisterSchema);
