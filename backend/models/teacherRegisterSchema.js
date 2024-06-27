import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import validator from "validator";

const teacherRegisterSchema = new mongoose.Schema(
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
    isAdminApproved: {
      type: Boolean,
      default: false,
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
teacherRegisterSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// Method to check password
teacherRegisterSchema.methods.isValidPassword = async function (
  enteredPassword
) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Ensure tokens array is initialized as an empty array
teacherRegisterSchema.pre("save", function (next) {
  if (!this.tokens) {
    this.tokens = [];
  }
  next();
});

export const teacherCredential = mongoose.model(
  "teacherCredential",
  teacherRegisterSchema
);
