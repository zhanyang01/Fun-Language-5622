import User from "./userModel.js";
import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import validator from "validator";
//import bcrypt from "bcryptjs";

// ==================== helper functions====================

//generate jwt token
const generateJWT = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "180d",
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
  const user = await User.findById(req.params.id);

  // if user id match param id send user, else throw error
  if (user) {
    return res.json(user);
  } else {
    return res.status(404).json({ message: "User not found" });
  }
});
