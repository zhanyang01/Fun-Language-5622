import User from "./userModel.js";
import asyncHandler from "express-async-handler";

// Get all users
export const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.json(users);
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
