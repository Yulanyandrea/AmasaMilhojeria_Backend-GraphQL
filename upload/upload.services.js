import cloudinary from "cloudinary";
import dotenv from 'dotenv';
dotenv.config();


cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
})

export async function uploadImage(image) {
  try {
    const result = await cloudinary.uploader.upload(image.path, {
      folder: 'Amasa milhojeria',
      use_filename: true,
      unique_filename: false,
    });

    return result.secure_url;
  } catch (error) {
    console.log(error);
    return `Image could not be uploaded:${error.message}`;
  }
}

