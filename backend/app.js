import express from "express";
import { config } from "dotenv";
import path from "path";
import cors from "cors";
import passport from "passport";
import session from "express-session"; // Add session support
import { dbConnection } from "./database/dbConnection.js";
import studentRouter from "./router/studentRouter.js";
import teacherRouter from "./router/teacherRouter.js";
import assignmentRouter from "./router/assignmentRouter.js";
import announcementRouter from "./router/announcementRouter.js";
import classRouter from "./router/classRouter.js";
import libraryRouter from "./router/libraryRouter.js";
import eventsRouter from "./router/eventsRouter.js";
import examRouter from "./router/examRouter.js";
import attendanceRouter from "./router/attendanceRouter.js";
import usersRouter from "./router/usersRouter.js";
import marks from "./router/marks.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import "./config/passport-google-strategy.js"; // Import the passport configuration

const app = express();
config({ path: "./config/config.env" });

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Initialize session support
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

// Initialize Passport and restore authentication state, if any, from the session
app.use(passport.initialize());
app.use(passport.session());

app.use("/api/v1/students", studentRouter);
app.use("/api/v1/teachers", teacherRouter);
app.use("/api/v1/assignments", assignmentRouter);
app.use("/api/v1/announcements", announcementRouter);
app.use("/api/v1/class", classRouter);
app.use("/api/v1/library", libraryRouter);
app.use("/api/v1/events", eventsRouter);
app.use("/api/v1/exam", examRouter);
app.use("/api/v1/attendance", attendanceRouter);
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/marks", marks);

app.use((err, req, res, next) => {
  errorHandler(err, req, res, next);
});

dbConnection();

/*---------------------DEPLOYMENT-----------------------*/

const allowedOrigins = process.env.ALLOWED_ORIGINS.split(",");

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error(`${origin} not allowed by CORS`));
      }
    },
    optionsSuccessStatus: 200,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

// Serve static files from the frontend build directory
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "../frontend", "dist")));

// API routes
// Example: app.use('/api', apiRoutes);

// Catch-all handler to serve the frontend's index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
});

/*---------------------DEPLOYMENT-----------------------*/

export default app;
