import express from "express";
import { cert } from "../Controllers/emailController.js";

const router = express.Router();

// express router method to create route for sending certificate to user
router.route("/email").post(cert);

export default router;