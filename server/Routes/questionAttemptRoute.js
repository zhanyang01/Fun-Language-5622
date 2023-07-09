import express from "express";
import { getQuestionsById, saveQuizProgress } from "../Controllers/questionAttemptController.js";
const router = express.Router();

// express router method to create route for getting attempts by id
router.route("/:id").get(getQuestionsById);

// express router method to create route for saving quiz progress
router.route("/:questionId").post(saveQuizProgress);

export default router;
