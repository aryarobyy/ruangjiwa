import { getForumById } from "@/mongoMethods/forum";

export const GET = async (req, {params}) => {
    try {
        const forumId = params.id;

        const response = await getForumById(forumId);

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