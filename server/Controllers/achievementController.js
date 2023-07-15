import achievement from "../Models/achievementModal.js";
import asyncHandler from "express-async-handler";

// Retrieve achievements by user id
export const getAchievementsById = asyncHandler(async (req, res) => {
  const { userId } = req.params;
  const achievements = await achievement.findOne({ userId });
  if (achievements) {
    return res.json({
      data: achievements,
    });
  } else {
    res.json({ message: "Achievements not found" });
  }
});

// To add new achievement of the user to the database to be able to be retrieved
export const addAchievement = async (req, res) => {
  const { userId, achievementTitle } = req.body;
  try {
    // check if the user already has achievements
    const userAchievements = await achievement.findOne({ userId });
    // if the user does not have any achievements, create one set for the user
    if (!userAchievements) {
      const newAchievement = new achievement({
        userId,
        achievementTitle,
      });
      await achievement.create(newAchievement).then(() => {
        res.send({ message: "Achievement added" });
        console.log("Achievement added");
      });
    } else {
      // if the user already has achievements, push the new achievement to the array
      if (userAchievements.achievements.includes(achievementTitle)) {
        res.send({ message: "Achievement already exists" });
        console.log("Achievement already exists");
      } else {
        await achievement
          .updateOne(
            {
              _id: userAchievements._id,
            },
            { achievements: [...userAchievements.achievements, achievementTitle] }
          )
          .then(() => {
            res.send({ message: "Achievement updated" });
            console.log("Achievement updated");
          });
      }
    }
  } catch (error) {
    console.log(error);
  }
};
