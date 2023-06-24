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
async function handleUpload(file) {
  const res = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });
  return res;
}

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
    const { name, username, email, password, image } = req.body;
    const user = await User.findOne({ email: req.body.email });
    // must fill up everything
    if (!name || !email || !password || !username) {
      return res.send({ message: "Please fill up all fields" });
    }
    // check if user exist
    if (user) {
      res.send({ message: "user already exists" });
      console.log("user already exists");
    } else {
      // encrypting password
      const encryptedPass = await bcrypt.hash(password, 10);
      //adding the default image
      var newImage = {
        url: "",
      };
      if (image) {
        const uploadImage = await cloudinary.v2.uploader.upload(profilePicture, {
          folder: "uploads",
        });
        const { url: url } = uploadImage;
        newImage = {
          url,
        };
      }
      const newUser = new User({
        name,
        username,
        password: encryptedPass,
        email,
        image: newImage,
      });
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
  const { name, username, currentEmail, newEmail, password, image, previousImageURL } = req.body;
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

        //changing profile picture
        if (previousImageURL) {
          await cloudinary.uploader.destroy(previousImageURL);
          console.log("previous image destroyed");
        }

        var updatedProfilePic = null;
        if (image) {
          console.log("uploaded!! beee");
          const uploadImage = await cloudinary.v2.uploader.upload(projectPicture, {
            folder: "uploads",
          });
          const { url: url } = uploadImage;
          updatedProfilePic = {
            url,
          };
        }

        //updating everything
        var updatedUser = {};
        if (updatedProfilePic) {
          updatedUser = {
            name: name,
            username: username,
            email: newEmail,
            password: encryptedPass,
            image: updatedProfilePic,
          };
        } else {
          updatedUser = {
            name: name,
            username: username,
            email: newEmail,
            password: encryptedPass,
          };
        }
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

// Express js listen method to run project
app.listen(PORT, console.log(`Server started `));

// Debugging purposes: localhost:6969/api/users
