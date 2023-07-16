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
    console.log(achievementTitle);
    const userAchievements = await achievement.findOne({ userId });
    // if the user does not have any achievements, create one set for the user
    if (!userAchievements) {
      const newAchievement = new achievement({
        userId,
        achievements: [achievementTitle],
      });
      await achievement.create(newAchievement).then(() => {
        console.log("Achievement added");
        return res.status(200).json({ message: "Achievement added" });
      });
    } else {
      const currAchievements = userAchievements.achievements;
      // if the user already has achievements, push the new achievement to the array
      if (userAchievements.achievements.includes(achievementTitle)) {
        console.log("Achievement already exists");
        return res.status(500).json({ message: "Achievement already exists" });
      } else {
        currAchievements.push(achievementTitle);
        await achievement
          .updateOne(
            {
              _id: userAchievements._id,
            },
            { achievements: currAchievements }
          )
          .then(() => {
            console.log("Achievement updated");
            return res.status(200).json({ message: "Achievement updated" });
          });
      }
    }
  } catch (error) {
    console.log(error);
  }
};
