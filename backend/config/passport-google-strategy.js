import passport from 'passport';
import { AdminRegister } from '../models/adminRegisterSchema.js'; // Adjusted for AdminRegister schema
import { config as dotenvConfig } from 'dotenv';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import { OAuth2Strategy as GoogleStrategy } from "passport-google-oauth";

dotenvConfig();

// Serialize user into the session
passport.serializeUser((user, done) => {
  return done(null, user.id);
});

// Deserialize user from the session
passport.deserializeUser(async (id, done) => {
  try {
    const user = await AdminRegister.findById(id).select("-password");
    return done(null, user);
  } catch (error) {
    return done(error);
  }
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "http://localhost:4000/api/v1/users/auth/google/callback", 
    },
    async function (accessToken, refreshToken, profile, done) {
      console.log(profile);
      try {
        // Find or create an admin based on the Google profile
        const admin = await AdminRegister.findOne({
          email: profile.emails[0].value,
        });
        // const profileImage = profile.photos && profile.photos[0].value;
        if (admin) {
          // Serialize admin into the session
          return done(null, admin);
        } else {
          const newAdmin = await AdminRegister.create({
            name: profile.displayName,
            email: profile.emails[0].value,
            password: crypto.randomBytes(20).toString("hex"),
            tokens: [], // Initialize tokens as an empty array
          });
          // Serialize new admin into the session
          return done(null, newAdmin);
        }
      } catch (error) {
        console.log(`Error in authentication using Google: ${error}`);
        return done(error);
      }
    }
  )
);