import axiosInstance from "@/libs/axiosInterface";
import { getForumMessage } from "@/mongoMethods/chatForum";
import { getForumById } from "@/mongoMethods/forum";

export const GET = async ({params}) => {
    try {
        const forumId = params.id;

        const response = await getForumById(forumId);
        const {data} = await axiosInstance.get(`/api/chat/forum/${forumId}`)
        console.log(data);

        return Response.json({
            message: "Success",
            data: {
                ...response,
                messages: data.data
            }
        });
    } catch (error) {
        console.error(error.message);
        return Response.json({
            message: "Error",  
            data: []
        })
    }
}