import mongoose from "mongoose";

const questionAttemptSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    questions: {
      type: Array,
      required: false,
    },
    questionLabel: {
      type: String,
      required: false,
    },
  },
  {
    timeStamp: true,
  }
);
const questionAttempt = mongoose.model("questionAttempt", questionAttemptSchema);

export default questionAttempt;
