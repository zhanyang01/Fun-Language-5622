import axios from "axios";

export const addAchievement = async (userId, achievementTitle) => {
  try {
    const addAchievementRequest = await axios.post(
      `${process.env.REACT_APP_BACKEND_SERVER}/api/achievements/`,
      {
        userId,
        achievementTitle,
      }
    );
    return addAchievementRequest.status === 200;
  } catch (e) {
    console.log(e);
    return false;
  }
};
