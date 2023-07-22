import {
  getUsers,
  getUserById,
  deleteUser,
  register,
  cert,
  login,
  changeUserDetails,
  changeProfilePicture,
  verifyEmail,
} from "../Controllers/userController.js";
import express from "express";

const router = express.Router();

// express router method to create route for getting all users
router.route("/").get(getUsers);

// express router method to create route for getting users by id
router.route("/:userId").get(getUserById);

// express router method to create route for deleting a user
router.route("/:userId").delete(deleteUser);

// express router method to create route for registering a user
router.route("/register").post(register);

// express router method to create route for verification of email
router.route("/verify/:userId/:token").put(verifyEmail);

// express router method to create route for login
router.route("/login").post(login);

// express router method to create route for changing user details
router.route("/profile").put(changeUserDetails);

// express router method to create route for changing profile picture
router.route("/profile/pic/:userId").put(changeProfilePicture);

export default router;
