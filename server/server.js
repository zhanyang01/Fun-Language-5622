import express from "express";
import connectDB from './server/backend/database.js';

const app = express();
connectDB();