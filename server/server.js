import connectDB from './database.js';
import userRoutes from './userRoute.js';
import express from 'express';
import User from './userModel.js';
import dotenv from 'dotenv';
import cors from "cors";
import jwt from 'jsonwebtoken';
import bcrypt from "bcrypt";

connectDB();

dotenv.config();

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors());

// Create API for user
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 6969

app.post("/Login", async(req, res) => {
    const {email, password} = req.body;
    const data = {email, password};
    const user = User.findOne({email: data.email});
    try {
        if (user) {
            const isCorrect = await bcrypt.compare(data.password, user.password);
            if (isCorrect) {
                const payload = {name: user.name, userName: user.userName, email: user.email};
                const token = jwt.sign(payload, process.env.TOKEN_KEY, {expiresIn: 86400});
                const valid = jwt.verify(token, process.env.TOKEN_KEY);
                if (valid) {
                    res.send({message: "login success"})
                } else {
                    res.send({message: "invalid login"})
                }
            } else {
                res.send({message: "wrong credentials"});
            }
        } else {
            res.send({message: "not registered"});
        }
    } catch(e) {
        console.log(e);
    }
});

app.post("/Register", async(req, res) => {
    console.log(req.body);
    const {name, userName, email, password} = req.body;
    const data = {name, userName, email, password};
    const user = User.findOne({email: data.email});
    try {
        if (user) {
            res.send({message: "user already exists"});
        } else {
            user.password = await bcrypt.hash(data.password, 10);
            await User.insertMany([data]);
            res.send({message: "successful"});
        }
    } catch(e) {
        console.log(e);
    }
});

// Express js listen method to run project
app.listen(PORT, console.log("Server started"));

// Debugging purposes: localhost:6969/api/users