import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

export const POST = async (req, res) => {
  const filePath = await req.json();

  try {
    const response = await cloudinary.uploader.upload(filePath);

    return Response.json({message: "Success", data: response.secure_url});
  } catch (error) {
    console.error("Error uploading image: ", error.message);
    return Response.json({message: "Failed"});
  };
};

// export const GET = async (imageUrl) => {
// 	try {

// 		if (!imageUrl) {
// 			return res.status(400).json({ error: "Image URL is required" });
// 		}

//     const imageDetails = await cloudinary.api.resource(imageUrl);

// 		res.status(200).json(imageDetails);
// 	} catch (err) {
// 		console.error("Error retrieving image details: ", err.message);
//     res.status(500).json({ error: "Failed to retrieve image details" });
// 	}
// };

// export const DELETE = async (imageUrl) => {
//   try {
//     const publicId = imageUrl.split("/").pop().split(".")[0];
//     await cloudinary.uploader.destroy(publicId);
//   } catch (error) {
//     console.error("Error deleting image: ", error.message);
//     throw new Error("Image deletion failed");
//   }
// };
