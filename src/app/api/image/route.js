import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

export const POST = async (req, res) => {
  const filePath = await req.json();

  try {
    const response = await cloudinary.uploader.upload(filePath);

    return Response.json({ message: "Success", data: response.secure_url });
  } catch (error) {
    console.error("Error uploading image: ", error.message);
    return Response.json({ message: "Failed", data: null });
  }
};