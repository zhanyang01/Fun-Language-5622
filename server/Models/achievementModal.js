import mongoose from "mongoose";

const achievementSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    achievements: {
      type: Array,
      required: false,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);
const achievement = mongoose.model("Achievement", achievementSchema);

export default achievement;
