import questionAttempt from "../Models/questionAttemptModel";
import asyncHandler from "express-async-handler";

// Retrieve user by id
export const getQuestionsById = asyncHandler(async (req, res) => {
  const questions = await questionAttempt.findById(req.params.id);
  // if user id match param id send user, else throw error
  if (questions) {
    return res.json(user);
  } else {
    return res.status(404).json({ message: "QuestionAttempt not found" });
  }
});
