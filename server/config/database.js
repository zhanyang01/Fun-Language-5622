import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    const MONGODB_URL = process.env.MONGODB_URL;
    const con = await mongoose.connect(MONGODB_URL);
    console.log(`Connection successful : ${con.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
