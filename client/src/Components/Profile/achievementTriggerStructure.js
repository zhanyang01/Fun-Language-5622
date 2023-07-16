import { addAchievement } from "../../HelperFunctions/addAchievement.js";

export const AchievementTriggerStructure = async (achievementTitle, toast) => {
  const userId = localStorage.getItem("userId");
  const achievementAdded = await addAchievement(userId, achievementTitle);
  if (achievementAdded) {
    toast({
      title: "Achievement Unlocked! " + achievementTitle,
      description: "You have unlocked an achievement!",
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "top",
    });
  }
};
