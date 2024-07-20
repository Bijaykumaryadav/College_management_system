import passport from "passport";
import { AdminRegister } from "../models/adminRegisterSchema.js";
import { teacherCredential } from "../models/teacherRegisterSchema.js";
import { studentCredential } from "../models/studentRegisterSchema.js";
import { config as dotenvConfig } from "dotenv";
import crypto from "crypto";
import { OAuth2Strategy as GoogleStrategy } from "passport-google-oauth";

dotenvConfig();

// Verify environment variables
console.log("Client ID:", process.env.CLIENT_ID);
console.log("Client Secret:", process.env.CLIENT_SECRET);

// Serialize user into the session
passport.serializeUser((user, done) => {
  return done(null, user.id);
});

// Deserialize user from the session
passport.deserializeUser(async (id, done) => {
  try {
    let user = await AdminRegister.findById(id).select("-password");
    if (!user) {
      user = await teacherCredential.findById(id).select("-password");
    }
    if (!user) {
      user = await studentCredential.findById(id).select("-password");
    }
    return done(null, user);
  } catch (error) {
    return done(error);
  }
});

// Google strategy for AdminRegister
passport.use(
  "google-admin",
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "http://localhost:4000/api/v1/users/auth/google/callback",
    },
    async function (accessToken, refreshToken, profile, done) {
      console.log(profile);
      try {
        const admin = await AdminRegister.findOne({
          email: profile.emails[0].value,
        });
        if (admin) {
          return done(null, admin);
        } else {
          const newAdmin = await AdminRegister.create({
            name: profile.displayName,
            email: profile.emails[0].value,
            password: crypto.randomBytes(20).toString("hex"),
            tokens: [],
            isAdminApproved: false,
          });
          return done(null, newAdmin);
        }
      } catch (error) {
        console.log(`Error in authentication using Google: ${error}`);
        return done(error);
      }
    }
  )
);

// Google strategy for teacherCredential
passport.use(
  "google-teacher",
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL:
        "http://localhost:4000/api/v1/users/auth/google-teacher/callback",
    },
    async function (accessToken, refreshToken, profile, done) {
      console.log(profile);
      try {
        const teacher = await teacherCredential.findOne({
          email: profile.emails[0].value,
        });
        if (teacher) {
          return done(null, teacher);
        } else {
          const newTeacher = await teacherCredential.create({
            name: profile.displayName,
            email: profile.emails[0].value,
            password: crypto.randomBytes(20).toString("hex"),
            tokens: [],
            isAdminApproved: false,
          });
          return done(null, newTeacher);
        }
      } catch (error) {
        console.log(`Error in authentication using Google: ${error}`);
        return done(error);
      }
    }
  )
);

passport.use(
  "google-student",
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL:
        "http://localhost:4000/api/v1/users/auth/google-student/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let student = await studentCredential.findOne({
          email: profile.emails[0].value,
        });
        if (!student) {
          student = await studentCredential.create({
            name: profile.displayName,
            email: profile.emails[0].value,
            password: crypto.randomBytes(20).toString("hex"),
            tokens: [],
            isAdminApproved: false,
          });
        }
        return done(null, student);
      } catch (error) {
        return done(error, null);
      }
    }
  )
);
