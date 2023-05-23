import connectDB from './database.js';
import userRoutes from './userRoute.js';
import express from 'express';
// import User from './userModel.js';
import dotenv  from 'dotenv';
// import cors from 'cors';

connectDB();

dotenv.config();

const app = express();

/*
app.use(express.json());;

app.use(express.urlencoded());

app.use(cors());
*/

//Create API for user
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 6969

/*
app.post("/Login", (req, res) => {
    const {email, password} = req.body;
    User.findOne({email: email}, (err, user) => {
        if (user) {
            if (password === user.password) {
                res.send({message: "login success", user: user});
            } else {
            res.send({message: "wrong credentials"});
        }
        } else {
            res.send("not register");
        }
    })
});

app.post("/Register", (req, res) => {
    console.log(req.body);
    const {name, userName, email, password} = req.body;
    User.findOne({email: email}, (err, user) => {
        if (user) {
            res.send({message: "user already exists"});
        } else {
            const user = new User({name, userName, email, password});
            user.save(err => {
                if (err) {
                    res.send(err);
                } else {
                    res.send({message: "successful"});
                }
            })
        }
    })
});
*/

//Express js listen method to run project
app.listen(PORT, console.log("Server started"));