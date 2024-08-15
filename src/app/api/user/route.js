import { mongoPostUser, mongoGetAllUser } from "@/mongoMethods/user";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcryptjs";
import { uploadImage } from "@/utils/cloudinary";

export const POST = async (req, res) => {
    try {
        const data = await req.json();

        const uuid = uuidv4();
        const { password, profilePic,...otherData } = data;

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        let profilePicUrl = "";
        if (profilePic) {
            profilePicUrl = await uploadImage(profilePic);
        }

        const userData = {...otherData, id: uuid, password: hashedPassword, profilePic: profilePicUrl,
        };

        await mongoPostUser(userId);
        return Response.json({ message: "Success" });
    } catch (error) {
        console.error(error.message);
        return Response.json({
            message: "Failed",
        });
    }
};

export const GET = async () => {
    try {
        const response = await mongoGetAllUser();

        return Response.json({
            message: "Success",
            data: response,
        });
    } catch (error) {
        console.error(error.message);
        return Response.json({
            message: "Error",
            data: [],
        });
    }
};
