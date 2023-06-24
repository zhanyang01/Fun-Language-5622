import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      url: {
        type: String,
        required: false,
      },
      id: {
        type: String,
        required: false,
      },
    },
  },
  {
    timeStamp: true,
  }
);
const User = mongoose.model("users", userSchema);

export default User;
