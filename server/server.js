import connectDB from "./database.js";
import userRoutes from "./userRoute.js";
import express from "express";
import User from "./userModel.js";
import dotenv from "dotenv";
import cors from "cors";
// import jwt from 'jsonwebtoken';
import bcrypt from "bcrypt";

connectDB();

dotenv.config();

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors());

// Create API for user
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 6969;

app.post("/Login", async (req, res) => {
  const user = User.findOne({ email: req.body.email });
  try {
    if (user) {
      const isCorrect = await bcrypt.compare(req.body.password, user.password);
      if (isCorrect) {
        res.send({ message: "login success" });
        /*
                const payload = {name: user.name, userName: user.userName, email: user.email};
                const token = jwt.sign(payload, process.env.TOKEN_KEY, {expiresIn: 86400});
                const valid = jwt.verify(token, process.env.TOKEN_KEY);
                if (valid) {
                    res.send({message: "login success"})
                } else {
                    res.send({message: "invalid login"})
                }
                */
      } else {
        res.status(404).json({ message: "wrong credentials" });
        // res.status(404);
        // throw new Error("wrong credentials");
      }
    } else {
      res.status(404).json({ message: "not registered" });
      // res.status(404);
      // throw new Error("not registered");
    }
  } catch (e) {
    console.log(e);
  }
});

app.post("/Register", async (req, res) => {
  console.log(req.body);
  const { email, password, name, username } = req.body;

  try {
    const user = await User.findOne({ email });
    if (user) {
      console.log("user exists");
      res.status(404).json({ message: "user already exists" });
      // res.status(404);
      // throw new Error("user already exists");
    } else {
      console.log("all seems OK");
      const encryptedPass = await bcrypt.hash(req.body.password, 10);
      const newUser = new User({ email, password: encryptedPass, name, username });
      await User.create(newUser).then(() => {
        res.send({ message: "successful" });
      });
      // await User.insertMany([req.body]);
      // res.send({ message: "successful" });
    }
  } catch (e) {
    console.log(e);
  }
});

// Express js listen method to run project
app.listen(PORT, console.log("Server started"));

// Debugging purposes: localhost:6969/api/users
