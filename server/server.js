import connectDB from './database.js'
import userRoutes from './userRoute.js'
import express from 'express'
import dotenv  from 'dotenv'

connectDB();

dotenv.config();

const app = express();

//Create API for user
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000

//Express js listen method to run project on http://localhost:5000
app.listen(PORT, console.log("Server started"));