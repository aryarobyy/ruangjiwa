import { mongoGetForumById } from "@/mongoMethods/forum";

export const GET = async (req, {params}) => {
    try {
        const forumId = params.id;

        const response = await mongoGetForumById(forumId);
        console.log(response)
        return Response.json({
            message: "Success",
            data: response
        });
    } catch (error) {
        console.error("Api error",error.message);
        return Response.json({
            message: "Api Error",  
            data: []
        })
    }
}
