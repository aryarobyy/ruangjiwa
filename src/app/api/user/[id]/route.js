import { getUser } from "@/mongoMethods/user";

export const GET = async (req, {params}) => {
    try {
        const userId = params._id;

        const response = await getUser(userId);

        return Response.json({
            message: "Success",
            data: response
        });
    } catch (error) {
        console.error(error.message);
        return Response.json({
            message: "Error",  
            data: []
        })
    }
}