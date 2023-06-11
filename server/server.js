import connectDB from "./database.js";
import userRoutes from "./users/userRoute.js";
import express from "express";
import User from "./users/userModel.js";
import dotenv from "dotenv";
import cors from "cors";
// import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

connectDB();

dotenv.config();

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors());

// Create API for user
app.use("/api/users", userRoutes);

// const PORT = process.env.PORT || 6969;
const PORT = 6969;

app.post("/Login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      const isCorrect = await bcrypt.compare(password, user.password);
      if (isCorrect) {
        res.send({ message: "login success" });
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

app.post("/Register", async (req, res) => {
  try {
    const { name, username, password, email } = req.body;
    const user = await User.findOne({ email: req.body.email });
    // must fill up everything
    if (!name || !email || !password || !username) {
      return res.send({ message: "Please fill up all fields" });
    }
    if (user) {
      res.send({ message: "user already exists" });
      console.log("user already exists");
    } else {
      /*
            let newDocument = {
                name: req.body.name, 
                userName: req.body.userName, 
                email: req.body.email,
                password: req.body.password
            };
            */
      const encryptedPass = await bcrypt.hash(password, 10);
      const newUser = new User({ name, username, password: encryptedPass, email });
      await User.create(newUser).then(() => {
        res.send({ message: "registration successful" });
        console.log("registration success");
      });
    }
  } catch (e) {
    console.log(e);
  }
});

// Express js listen method to run project
app.listen(PORT, console.log("Server started"));

// Debugging purposes: localhost:6969/api/users