import connectDB from "./config/database.js";
import userRoutes from "./Routes/userRoute.js";
import questionAttemptRoutes from "./Routes/questionAttemptRoute.js";
import achievementRoutes from "./Routes/achievementRoute.js";
import express from "express";
import User from "./Models/userModel.js";
import dotenv from "dotenv";
import cors from "cors";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
// import defaultProfileLogo from './Images';
// import emailRoutes from "./Routes/emailRoute.js";
//import sendEmail from "./Controllers/emailController.js";
// import nodemailer from "nodemailer";
//import Token from "./Models/tokenModel.js";
import sendCert from "./HelperFunctions/sendCert.js";

connectDB();

dotenv.config();

// ================= JWT =================
/*
const generateJWT = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: 5*60,
  });
};
*/

const app = express();

app.use(express.json({ limit: "50mb" }));

app.use(express.urlencoded({ extended: true, limit: "50mb" }));

app.use(cors());

app.use("/static", express.static("./uploads"));

// Create API for user
app.use("/api/users", userRoutes);

// Create API for questionAttempt
app.use("/api/questionAttempts", questionAttemptRoutes);

// Create API for achievement
app.use("/api/achievements", achievementRoutes);

// Create API for sending email
// app.use("/api/email", emailRoutes)

// const PORT = process.env.PORT || 6969;
const PORT = 6969;

app.get("/", async (req, res) => {
  return res.json({
    message: "Server is up",
  });
});

// ===================send email================================
app.post("/AssessmentStructure", async (req, res) => {
  var filename = "";
  var filepath = "";
  const { email, type } = req.body;
  // console.log(req.body);

  // need to account for which assessment to attach the correct pdf
  if (type === "English Assessment") {
    filename = "English Language Assessment.pdf";
    filepath = "./English Certificates/English Language Assessment.pdf";
  }

  try {
    await sendCert(filename, filepath, email).then((result) => {
      res.send({ message: "An email has been sent to you" });
      console.log("An email has been sent to you");
    });
  } catch (e) {
    console.log(e);
  }
});

app.post("/QuizStructure", async (req, res) => {
  var filename = "";
  var filepath = "";
  const { email, type } = req.body;
  // console.log(req.body);

  // need to account for which assessment to attach the correct pdf
  if (type === "English Course") {
    filename = "English Language Course.pdf";
    filepath = "./English Certificates/English Language Course.pdf";
  }

  try {
    await sendCert(filename, filepath, email).then((result) => {
      res.send({ message: "An email has been sent to you" });
      console.log("An email has been sent to you");
    });
  } catch (e) {
    console.log(e);
  }
});

// Express js listen method to run project
app.listen(PORT, console.log(`Server started `));

// Debugging purposes: localhost:6969/api/users
