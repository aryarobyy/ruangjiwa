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

export const GET = async (imageId) => {

  // Return colors in the response
  const options = {
    colors: true,
  };

  try {
      // Get details about the asset
      const result = await cloudinary.api.resource(imageId, options);
      console.log(result);
      return result.colors;
      } catch (error) {
      console.error(error);
  }
};