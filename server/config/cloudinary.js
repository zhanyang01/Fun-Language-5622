import cloudinary from "cloudinary";

const cloudinaryObj = cloudinary;

cloudinaryObj.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET_KEY,
});

export { cloudinaryObj };
