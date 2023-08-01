import {
  getUsers,
  getUserById,
  deleteUser,
  register,
  login,
  changeUserDetails,
  changeProfilePicture,
  verifyEmail,
  sendForgetPasswordEmail,
  resetPassword,
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

// express router method to create route for sending a password reset email
router.route("/forgetpassword").put(sendForgetPasswordEmail);

// express router method to create route for resetting password
router.route("/resetpassword").post(resetPassword);

export default router;
