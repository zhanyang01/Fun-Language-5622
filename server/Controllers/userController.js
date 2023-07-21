import User from "../Models/userModel.js";
import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";

// import validator from "validator";
import bcrypt from "bcrypt";
import sendEmail from "../HelperFunctions/sendEmail.js";
import sendCert from "../HelperFunctions/sendCert.js";
import { cloudinaryObj } from "../config/cloudinary.js";

// ==================== helper functions====================

//====================generate jwt token====================
const generateJWT = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: 5 * 60,
  });
};

//====================verify jwt token====================
const verifyJWT = async (token) => {
  if (token) {
    try {
      // verification
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // get user from token
      const currUser = User.findById(decoded.id);
      if (currUser) {
        console.log("token verified");
        return true;
      } else {
        console.log("token not verified");
        return false;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  } else {
    console.log("token not verified");
    return false;
  }
};

// ==================== main functions====================

//signup user
/*
const signupUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.signup(email, password);

    res.status(200).json({ email, password });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
*/

// Get all users
export const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  return res.json(users);
});

// Retrieve user by id
export const getUserById = asyncHandler(async (req, res) => {
  const { userId } = req.params;
  const user = await User.findById(userId);
  console.log(user);

  // if user id match param id send user, else throw error
  if (user) {
    return res.json(user);
  } else {
    return res.status(404).json({ message: "User not found" });
  }
});

// Delete user by id
export const deleteUser = async (req, res) => {
  const { userId } = req.params;
  const currUser = await User.findById(userId);
  console.log(currUser);
  console.log(userId);
  // if user does not exist throw error
  if (!currUser) {
    return res.status(404).json({
      message: "User not found",
    });
    // else delete user
  } else {
    await User.deleteOne(currUser)
      .then((deleteResult) => {
        console.log(deleteResult);
        return res.status(200).json({
          message: "User deleted",
        });
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json({
          message: err,
        });
      });
  }
};

// ============ Login ============
export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      const isCorrect = await bcrypt.compare(password, user.password);
      if (isCorrect) {
        res.send({ message: "login success", username: user.username, userId: user._id });
        console.log("login success");
        /*
                const payload = {name: user.name, userName: user.userName, email: user.email};
                const token = jwt.sign(payload, process.env.TOKEN_KEY, {expiresIn: 86400});
                const valid = jwt.verify(token, process.env.TOKEN_KEY);
                if (valid) {
                    res.send({message: "login success"});
                } else {
                    res.send({message: "invalid login"});
                }
                */
      } else {
        res.send({ message: "wrong credentials" });
        console.log("wrong credentials");
      }
    } else {
      res.send({ message: "not registered" });
      console.log("not registered");
    }
  } catch (e) {
    console.log(e);
  }
});

// ============= Register =============
export const register = asyncHandler(async (req, res) => {
  try {
    const { name, username, email, password } = req.body;
    const user = await User.findOne({ email: req.body.email });
    // must fill up everything
    if (!name || !email || !password || !username) {
      return res.send({ message: "Please fill up all fields" });
    }
    // check if user exist
    if (user) {
      res.send({ message: "user already exists" });
      console.log("user already exists");
    } else {
      // encrypting password
      const encryptedPass = await bcrypt.hash(password, 10);
      const newUser = new User({
        name,
        username,
        password: encryptedPass,
        email,
      });
      await User.create(newUser).then(async (result) => {
        const token = generateJWT(newUser._id);
        const content = {
          user: newUser,
          token: token,
          recipient: email,
        };
        await sendEmail("verification", content).then((result) => {
          res.send({
            message: "registration successful",
            userId: newUser._id,
            success: true,
          });
          console.log("registration successful");
        });
      });
    }
  } catch (e) {
    console.log(e);
  }
});

// ================ change user details
export const changeUserDetails = asyncHandler(async (req, res) => {
  const { name, username, currentEmail, newEmail, password } = req.body;
  //const { UserId } = req.params;
  try {
    //check if user exists
    const currentUser = await User.findOne({ email: currentEmail });
    if (!currentUser) {
      res.send({ message: "no such user exists" });
      console.log("no such user exists");
    } else {
      // check if email that is in current email fills is used by someone else
      const user = await User.findOne({ email: newEmail });
      if (user && currentUser.email !== user.email) {
        res.send({ message: "email is already used by another user" });
        console.log("email is already used by another user");
      } else {
        // changing password and email
        const encryptedPass = await bcrypt.hash(password, 10);
        //updating everything
        var updatedUser = {};
        updatedUser = {
          name: name,
          username: username,
          email: newEmail,
          password: encryptedPass,
        };
        await User.updateOne(
          {
            _id: currentUser.id,
          },
          updatedUser
        ).then(() => {
          res.send({ message: "update successful" });
          console.log("update successful");
        });
      }
    }
  } catch (e) {
    console.log(e);
  }
});

// ================ change user profile picture ================
export const changeProfilePicture = asyncHandler(async (req, res) => {
  const { userId } = req.params;
  const { image } = req.body;
  try {
    //check if user exists
    const currentUser = await User.findById(userId);
    if (!currentUser) {
      res.send({ message: "no such user exists" });
      console.log("no such user exists");
    } else {
      if (currentUser.image && currentUser.image.id) {
        await cloudinaryObj.v2.uploader.destroy(currentUser.image.id);
      }
      var updatedImage = null;
      if (image) {
        const uploadImage = await cloudinaryObj.v2.uploader.upload(image, {
          folder: "Fun Language",
        });

        const { public_id: id, url } = uploadImage;
        updatedImage = {
          id,
          url,
        };
      }

      if (updatedImage) {
        await User.updateOne(
          {
            _id: currentUser.id,
          },
          { image: updatedImage }
        ).then(() => {
          res.send({ message: "profile picture updated successfully" });
          console.log("profile picture update successfully");
        });
      } else {
        res.send({ message: "profile picture updated unsuccessful" });
        console.log("profile picture updated unsuccessful");
      }
    }
  } catch (e) {
    console.log(e);
  }
});

// ============= Send certificate of achievement =============
export const cert = asyncHandler(async (req, res) => {
  var filename = "";
  var filepath = "";
  const { email, userId, type } = req.body;

  // need to account for which assessment to attach the correct pdf
  if (type === "English Assessment") {
    filename = "English Language Assessment.pdf";
    filepath = "./English Certificates/English Language Assessment.pdf";
  }
  if (type === "English Course") {
    filename = "English Language Course.pdf";
    filepath = "./English Certificates/English Language Course.pdf";
  }
  try {
    const currentUser = await User.findById(userId);
    console.log(currentUser);
    if (currentUser) {
      const currentCerts = currentUser.cert;
      if (currentCerts.includes(type)) {
        res.send({ message: "you have already received the certificate" });
        console.log("You have already received the certificate");
      } else {
        currentCerts.push(type);
        currentUser.save();
        await User.updateOne(
          {
            id: currentUser._id,
          },
          { cert: currentCerts }
        ).then(() => {
          console.log(currentUser);
          console.log("User updated");
        });
        await sendCert(filename, filepath, email).then((result) => {
          res.send({ message: "An email has been sent to you" });
          console.log("An email has been sent to you");
        });
      }
    } else {
      res.send({ message: "Email does not exist" });
      console.log("Email does not exist");
    }
  } catch (e) {
    console.log(e);
  }
});
