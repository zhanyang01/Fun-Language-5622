import questionAttempt from "../Models/questionAttemptModel.js";
import asyncHandler from "express-async-handler";

// Retrieve attempt by id
export const getQuestionsById = asyncHandler(async (req, res) => {
  const { userId, questionLabel } = req.params;
  const questions = await questionAttempt.findOne({ userId, questionLabel });
  // if user id match param id send user, else throw error
  if (questions) {
    return res.json({
      data: questions,
    });
  } else {
    return res.json({ message: "Question Attempt not found" });
  }
});

// To save quiz progress before exiting
export const saveQuizProgress = async (req, res) => {
  const { userId, questions, questionLabel } = req.body;
  try {
    //check if existing attempt exists with userId and questionLabel
    const currentQuestionAttempt = await questionAttempt.findOne({ userId, questionLabel });
    //if existing attempt does not exist, create a new attempt
    if (!currentQuestionAttempt) {
      const newQuestionAttempt = new questionAttempt({
        userId,
        questions,
        questionLabel,
      });
      await questionAttempt.create(newQuestionAttempt).then(() => {
        res.send({ message: "Attempt Created" });
      });
      //if existing attempt exists, update the attempt
    } else {
      await questionAttempt
        .updateOne(
          {
            _id: currentQuestionAttempt.id,
          },
          { questions }
        )
        .then(() => {
          res.send({ message: "question attempt updated successfully" });
        });
    }
  } catch (e) {
    console.log(e);
  }
};
