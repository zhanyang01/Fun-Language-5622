import { sendEmail } from "../Controllers/emailController.js";
import express from "express";

const router = express.Router();

// express router method to create route for sending email to user
router.route("/").post(sendEmail);

export default router;