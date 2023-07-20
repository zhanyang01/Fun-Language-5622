import User from "../Models/userModel.js";
import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";

// import validator from "validator";
import bcrypt from "bcrypt";
import sendEmail from "../HelperFunctions/sendEmail.js";
import sendCert from "../HelperFunctions/sendCert.js";

// ==================== helper functions====================

//generate jwt token
const generateJWT = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: 5 * 60,
  });
};

// ==================== main functions====================

//signup user
/*
const signupUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.signup(email, password);

    res.status(200).json({ email, password });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
*/

// Get all users
export const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  return res.json(users);
});

// Retrieve user by id
export const getUserById = asyncHandler(async (req, res) => {
  const { userId } = req.params;
  const user = await User.findById(userId);
  console.log(user);

  // if user id match param id send user, else throw error
  if (user) {
    return res.json(user);
  } else {
    return res.status(404).json({ message: "User not found" });
  }
});

// Delete user by id
export const deleteUser = async (req, res) => {
  const { userId } = req.params;
  const currUser = await User.findById(userId);
  console.log(currUser);
  console.log(userId);
  // if user does not exist throw error
  if (!currUser) {
    return res.status(404).json({
      message: "User not found",
    });
    // else delete user
  } else {
    await User.deleteOne(currUser)
      .then((deleteResult) => {
        console.log(deleteResult);
        return res.status(200).json({
          message: "User deleted",
        });
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json({
          message: err,
        });
      });
  }
};

// ============= Register =============
export const register = asyncHandler(async (req, res) => {
  try {
    const { name, username, email, password } = req.body;
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
      const newUser = new User({
        name,
        username,
        password: encryptedPass,
        email,
      });
      await User.create(newUser).then(async (result) => {
        const content = {
          user: newUser,
          recipient: email,
        };
        await sendEmail("verification", content).then((result) => {
          res.send({
            message: "registration successful",
            userId: newUser._id,
            success: true,
          });
          console.log("registration successful");
        });
      });
    }
  } catch (e) {
    console.log(e);
  }
});

// ============= Send certificate of achievement =============
export const cert = asyncHandler(async(req, res) => {
  var filename = "";
  var filepath = "";
  const { email, testTitle } = req.body;
  // console.log(req.body);

  // need to account for which assessment to attach the correct pdf
  if (testTitle === "Basic Assessment") {
    filename = "English Language Basic Assessment.pdf";
    filepath = "./English Certificates/English Language Basic Assessment.pdf";
  }
  if (testTitle === "Intermediate Assessment") {
    filename = "English Language Intermediate Assessment.pdf";
    filepath = "./English Certificates/English Language Intermediate Assessment.pdf";
  }
  if (testTitle === "Advanced Assessment") {
    filename = "English Language Advanced Assessment.pdf";
    filepath = "./English Certificates/English Language Advanced Assessment.pdf";
  }

  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      await sendCert(filename, filepath, email).then(() => {
        res.send({ message: "An email has been sent to you" });
        console.log("An email has been sent to you");
      });
    } else {
      res.send({ message: "Email does not exist" });
      console.log("Email does not exist");
    }
  } catch (e) {
    console.log(e);
  }
});