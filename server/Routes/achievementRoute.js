import { getAchievementsById, addAchievement } from "../Controllers/achievementController.js";
import express from "express";

const router = express.Router();

// express router method to create route for getting achievements by user id
router.route("/:userId").get(getAchievementsById);

// express router method to create route for adding new achievement
router.route("/").post(addAchievement);

export default router;
