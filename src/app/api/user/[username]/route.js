import { mongoGetUserByUsername } from "@/mongoMethods/user";

export const GET = async (req, {params}) => {
    try {
        const username = params.username;

        const response = await mongoGetUserByUsername(username);

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
