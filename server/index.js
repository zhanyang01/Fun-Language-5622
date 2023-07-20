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
import { cloudinaryObj } from "./config/cloudinary.js";
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
    await sendCert(filename, filepath, email).then(() => {
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
    await sendCert(filename, filepath, email).then(() => {
      res.send({ message: "An email has been sent to you" });
      console.log("An email has been sent to you");
    });
  } catch (e) {
    console.log(e);
  }
});

// ===================login================================
app.post("/Login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      const isCorrect = await bcrypt.compare(password, user.password);
      if (isCorrect) {
        res.send({ message: "login success", username: user.username, userId: user._id });
        console.log("login success");
        /*
                const payload = {name: user.name, userName: user.userName, email: user.email};
                const token = jwt.sign(payload, process.env.TOKEN_KEY, {expiresIn: 86400});
                const valid = jwt.verify(token, process.env.TOKEN_KEY);
                if (valid) {
                    res.send({message: "login success"});
                } else {
                    res.send({message: "invalid login"});
                }
                */
      } else {
        res.send({ message: "wrong credentials" });
        console.log("wrong credentials");
      }
    } else {
      res.send({ message: "not registered" });
      console.log("not registered");
    }
  } catch (e) {
    console.log(e);
  }
});

//    =========================changing user details(password and email)=====================
app.put("/Profile", async (req, res) => {
  const { name, username, currentEmail, newEmail, password } = req.body;
  //const { UserId } = req.params;
  try {
    //check if user exists
    const currentUser = await User.findOne({ email: currentEmail });
    if (!currentUser) {
      res.send({ message: "no such user exists" });
      console.log("no such user exists");
    } else {
      // check if email that is in current email fills is used by someone else
      const user = await User.findOne({ email: newEmail });
      if (user && currentUser.email !== user.email) {
        res.send({ message: "email is already used by another user" });
        console.log("email is already used by another user");
      } else {
        // changing password and email
        const encryptedPass = await bcrypt.hash(password, 10);
        //updating everything
        var updatedUser = {};
        updatedUser = {
          name: name,
          username: username,
          email: newEmail,
          password: encryptedPass,
        };
        await User.updateOne(
          {
            _id: currentUser.id,
          },
          updatedUser
        ).then(() => {
          res.send({ message: "update successful" });
          console.log("update successful");
        });
      }
    }
  } catch (e) {
    console.log(e);
  }
});

//=====================add profile picture=======================
app.put("/Profile/Pic/:UserId", async (req, res) => {
  const { UserId } = req.params;
  const { image } = req.body;
  try {
    //check if user exists
    const currentUser = await User.findById(UserId);
    if (!currentUser) {
      res.send({ message: "no such user exists" });
      console.log("no such user exists");
    } else {
      if (currentUser.image && currentUser.image.id) {
        await cloudinaryObj.v2.uploader.destroy(currentUser.image.id);
      }
      var updatedImage = null;
      if (image) {
        const uploadImage = await cloudinaryObj.v2.uploader.upload(image, {
          folder: "Fun Language",
        });

        const { public_id: id, url } = uploadImage;
        updatedImage = {
          id,
          url,
        };
      }

      if (updatedImage) {
        await User.updateOne(
          {
            _id: currentUser.id,
          },
          { image: updatedImage }
        ).then(() => {
          res.send({ message: "profile picture updated successfully" });
          console.log("profile picture update successfully");
        });
      } else {
        res.send({ message: "profile picture updated unsuccessful" });
        console.log("profile picture updated unsuccessful");
      }
    }
  } catch (e) {
    console.log(e);
  }
});

// Express js listen method to run project
app.listen(PORT, console.log(`Server started `));

// Debugging purposes: localhost:6969/api/users
