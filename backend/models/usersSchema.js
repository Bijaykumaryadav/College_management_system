import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
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

// Ensure tokens array is initialized as an empty array
userSchema.pre("save", function (next) {
  if (!this.tokens) {
    this.tokens = [];
  }
  next();
});

// Method to validate password
userSchema.methods.isValidPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// Create models if they don't already exist
export const Admin =
  mongoose.models.Admin || mongoose.model("Admin", userSchema);
export const Student =
  mongoose.models.Student || mongoose.model("Student", userSchema);
export const Teacher =
  mongoose.models.Teacher || mongoose.model("Teacher", userSchema);
