import { getUsers, getUserById, deleteUser, register, cert } from "../Controllers/userController.js";
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
//router.put("/verify/:userId").put(verifyEmail);

// express router method to create route for sending email to user
router.route("/cert").put(cert);

export default router;
