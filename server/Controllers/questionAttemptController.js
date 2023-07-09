import questionAttempt from "../Models/questionAttemptModel.js";
import asyncHandler from "express-async-handler";

// Retrieve attempt by id
export const getQuestionsById = asyncHandler(async (req, res) => {
  const questions = await questionAttempt.findById(req.params.id);
  // if user id match param id send user, else throw error
  if (questions) {
    return res.json(questions);
  } else {
    return res.status(404).json({ message: "QuestionAttempt not found" });
  }
});

export const saveQuizProgress = async (req, res) => {
  const { questionId } = req.params;
  const { userId, questions, questionLabel } = req.body;
  try {
    //check if existing attempt exists
    const currentQuestionAttempt = await questionAttempt.findById(questionId);
    //if existing attempt does not exist, create a new attempt
    if (!currentQuestionAttempt) {
      const newQuestionAttempt = new questionAttempt({
        userId,
        questions,
        questionLabel,
      });
      await questionAttempt.create(newQuestionAttempt).then(() => {
        res.send({ message: "a new attempt for the user have been created" });
        console.log("a new attempt for the user have been created");
      });
      //if existing attempt exists, update the attempt
    } else {
      var updatedAttempt = {};
      updatedAttempt = {
        userId,
        questions,
        questionLabel,
      };

      await questionAttempt
        .updateOne(
          {
            _id: currentQuestionAttempt.id,
          },
          updatedAttempt
        )
        .then(() => {
          res.send({ message: "question attempt updated successfully" });
          console.log("question attempt update successfully");
        });
    }
  } catch (e) {
    console.log(e);
  }
};
