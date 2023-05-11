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
    const result = await cloudinary.uploader.upload(image, {
      folder: 'Amasa milhojeria',
      use_filename: true,
      unique_filename: false,
    });

    return result;
  } catch (error) {
    console.log(error);
    throw new Error('Error uploading image');
  }
}

