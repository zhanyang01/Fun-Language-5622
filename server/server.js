import connectDB from './database.js';
import userRoutes from './userRoute.js';
import express from 'express';
import User from './userModel.js';
import dotenv from 'dotenv';
import cors from "cors";

connectDB();

dotenv.config();

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors());

// Create API for user
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 6969

app.post("/Login", (req, res) => {
    const {email, password} = req.body;
    const user = User.find({email: email});
    if (user) {
        if (password === user.password) {
            res.send({message: "login success", user: user});
        } else {
            res.send({message: "wrong credentials"});
        }
    } else {
        res.send("not registered");
    }
});

app.post("/Register", (req, res) => {
    console.log(req.body);
    const {name, userName, email, password} = req.body;
    const user = User.find({email: email});
    if (user) {
        res.send({message: "user already exists"});
    } else {
        User.insertMany([{name, userName, email, password}]);
        res.send({message: "successful"})
    }
});

// Express js listen method to run project
app.listen(PORT, console.log("Server started"));

// Debugging purposes: localhost:6969/api/users