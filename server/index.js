import connectDB from "./config/database.js";
import userRoutes from "./Routes/userRoute.js";
import questionAttemptRoutes from "./Routes/questionAttemptRoute.js";
import achievementRoutes from "./Routes/achievementRoute.js";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

connectDB();

dotenv.config();

const app = express();

app.use(express.json({ limit: "50mb" }));

app.use(express.urlencoded({ extended: true, limit: "50mb" }));

app.use(cors());

app.use("/static", express.static("./uploads"));

// Create API for user
app.use("/api/users", userRoutes);

// Create API for questionAttempt
app.use("/api/questionAttempts", questionAttemptRoutes);

// Create API for achievement
app.use("/api/achievements", achievementRoutes);

// const PORT = process.env.PORT || 6969;
const PORT = 6969;

app.get("/", async (req, res) => {
  return res.json({
    message: "Server is up",
  });
});

// Express js listen method to run project
app.listen(PORT, console.log(`Server started `));

// Debugging purposes: localhost:6969/api/users
