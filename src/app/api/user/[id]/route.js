import { mongoGetUserById } from "@/mongoMethods/user";

export const GET = async (req, {params}) => {
    try {
        const userId = params.id;

        const response = await mongoGetUserById(userId);

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