import connectDB from "./config/database.js";
import userRoutes from "./Routes/userRoute.js";
import express from "express";
import User from "./Models/userModel.js";
import dotenv from "dotenv";
import cors from "cors";
// import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import fs from "fs";
// import defaultProfileLogo from './Images';

//==============temporary cloudinary setup==================
import cloudinary from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET_KEY,
});

//================= temporary multer setup ====================
import Multer from "multer";
const storage = new Multer.memoryStorage();
const upload = Multer({
  dest: "./uploads",
});

connectDB();

dotenv.config();

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/static", express.static("./uploads"));

// Create API for user
app.use("/api/users", userRoutes);

// const PORT = process.env.PORT || 6969;
const PORT = 6969;

//login
app.post("/Login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      const isCorrect = await bcrypt.compare(password, user.password);
      if (isCorrect) {
        res.send({ message: "login success", username: user.username /*userId: user._id*/ });
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

//registration of account
app.post("/Register", async (req, res) => {
  try {
    const { name, username, email, password } = req.body;
    const user = await User.findOne({ email: req.body.email });
    // must fill up everything
    if (!name || !email || !password || !username) {
      return res.send({ message: "Please fill up all fields" });
    }
    if (user) {
      res.send({ message: "user already exists" });
      console.log("user already exists");
    } else {
      const encryptedPass = await bcrypt.hash(password, 10);
      const newUser = new User({ name, username, password: encryptedPass, email });
      await User.create(newUser).then(() => {
        res.send({ message: "registration successful" });
        console.log("registration successful");
      });
    }
  } catch (e) {
    console.log(e);
  }
});

// changing user details(password and email)
app.put("/Profile", async (req, res) => {
  const { name, username, currentEmail, newEmail, password } = req.body;
  try {
    const currentUser = await User.findOne({ email: req.body.currentEmail });
    if (!currentUser) {
      res.send({ message: "no such user exists" });
      console.log("no such user exists");
    } else {
      const user = await User.findOne({ email: req.body.newEmail });
      if (user) {
        res.send({ message: "email is already used by another user" });
        console.log("email is already used by another user");
      } else {
        const encryptedPass = await bcrypt.hash(password, 10);
        await User.updateOne(
          { email: currentEmail },
          {
            $set: {
              name: name,
              username: username,
              password: encryptedPass,
              email: newEmail,
            },
          }
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

//adding profile picture
var newImage = {
  public_id: "",
  url: "",
};
app.post("/uploadFile", upload.single("image"), (req, res) => {
  let fileType = req.file.mimetype.split("/")[1];
  let newFileName = req.file.filename + "." + fileType;
  fs.rename(`./uploads/${req.file.filename}`, `./uploads/${newFileName}`, function () {
    console.log("callback");
    res.send("200");
  });
});

//==================need to debug but this uses cloudinary also=======================
/*app.post("/upload", upload.single("my_file"), async (req, res) => {
  try {
    const b64 = Buffer.from(req.file.buffer).toString("base64");
    let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
    const cldRes = await handleUpload(dataURI);
    res.json(cldRes);
  } catch (error) {
    console.log(error);
    res.send({
      message: error.message,
    });
  }
});*/

// Express js listen method to run project
app.listen(PORT, console.log(`Server started ${PORT}`));

// Debugging purposes: localhost:6969/api/users
