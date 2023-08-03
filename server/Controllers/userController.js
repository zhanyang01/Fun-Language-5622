import User from "../Models/userModel.js";
import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import sendEmail from "../HelperFunctions/sendEmail.js";
import { cloudinaryObj } from "../config/cloudinary.js";

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
      const currUser = await User.findById(decoded.id);
      // if currUser exist means token is valid else not valid
      if (currUser) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  } else {
    return false;
  }
};

// Get all users
export const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  return res.json(users);
});

// Retrieve user by id
export const getUserById = asyncHandler(async (req, res) => {
  const { userId } = req.params;
  const user = await User.findById(userId);

  // if user id match param id send user, else throw error
  if (user) {
    return res.json(user);
  } else {
    return res.status(404).json({ message: "User not found" });
  }
});

// ==================Verify email====================
export const verifyEmail = asyncHandler(async (req, res) => {
  const { userId } = req.params;
  const currentUser = await User.findById(userId);
  const currentToken = req.params.token;
  const validToken = verifyJWT(currentToken);
  if (!validToken) {
    res.send({ message: "invalid token", success: false });
  } else {
    if (!currentUser) {
      res.send({ message: "no such user exists", success: false });
    } else {
      if (!currentUser.verified) {
        await User.updateOne(
          {
            _id: currentUser.id,
          },
          { verified: true }
        )
          .then(() => {
            res.send({ message: "email verified", success: true });
          })
          .catch((err) => {
            res.send({ message: "error", success: false });
            console.log(err);
          });
      } else {
        res.send({ message: "email already verified", success: false });
      }
    }
  }
});

// ===============Delete user by id===============
export const deleteUser = async (req, res) => {
  const { userId } = req.params;
  const currUser = await User.findById(userId);
  // if user does not exist throw error
  if (!currUser) {
    return res.status(404).json({
      message: "User not found",
    });
    // else delete user
  } else {
    await User.deleteOne(currUser)
      .then((deleteResult) => {
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
    if (user && user.verified) {
      const isCorrect = await bcrypt.compare(password, user.password);
      if (isCorrect) {
        res.send({ message: "login success", username: user.username, userId: user._id });
      } else {
        res.send({ message: "wrong credentials" });
      }
    } else {
      if (user && !user.verified) {
        res.send({ message: "email not verified" });
      } else {
        res.send({ message: "not registered" });
      }
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
    } else {
      // check if email that is in current email fills is used by someone else
      const user = await User.findOne({ email: newEmail });
      if (user && currentUser.email !== user.email) {
        res.send({ message: "email is already used by another user" });
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
    // Check if user exists
    const currentUser = await User.findById(userId);
    if (!currentUser) {
      res.send({ message: "no such user exists" });
    } else {
      if (currentUser.image && currentUser.image.id) {
        // Remove the previous profile picture from Cloudinary
        await cloudinaryObj.v2.uploader.destroy(currentUser.image.id);
      }
      var updatedImage = null;
      if (!image) {
        return res.send({ message: "no image uploaded" });
      } else {
        // Upload the new image to Cloudinary
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
        // Update the user's profile picture in the database
        await User.updateOne(
          {
            _id: currentUser.id,
          },
          { image: updatedImage }
        ).then(() => {
          res.send({ message: "profile picture updated successfully" });
        });
      } else {
        res.send({ message: "profile picture updated unsuccessful" });
      }
    }
  } catch (e) {
    // Handle any errors that might occur during the process
    console.log(e);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

// ================ send forget password email ================
export const sendForgetPasswordEmail = asyncHandler(async (req, res) => {
  const userEmail = req.body.email;
  try {
    await User.findOne({ email: userEmail }).then(async (result) => {
      if (!result) {
        res.send({ message: "no such user exists" });
      } else {
        const token = generateJWT(result._id);
        if (result.verified) {
          const content = {
            user: result,
            token: token,
            recipient: userEmail,
          };
          await sendEmail("forgetPassword", content).then((result) => {
            res.send({
              message: "email sent successfully",
              success: true,
            });
          });
        } else {
          res.send({
            message: "email not verified",
            success: true,
          });
        }
      }
    });
  } catch (e) {
    console.log(e);
  }
});

// ==================== reset password =========================
export const resetPassword = asyncHandler(async (req, res) => {
  const { userId, token, newPassword } = req.body;
  const validToken = verifyJWT(token);
  if (!validToken) {
    res.send({ message: "invalid token", success: false });
  } else {
    const currentUser = await User.findById(userId);
    if (!currentUser) {
      res.send({ message: "no such user exists", success: false });
    } else {
      if (newPassword.length < 8) {
        res.send({ message: "password must be at least 8 characters long", success: false });
      } else {
        const encryptedPass = await bcrypt.hash(newPassword, 10);
        await User.updateOne(
          {
            _id: currentUser.id,
          },
          { password: encryptedPass }
        )
          .then(() => {
            res.send({ message: "password reset successful", success: true });
          })
          .catch((err) => {
            res.send({ message: "error", success: false });
            console.log(err);
          });
      }
    }
  }
});
