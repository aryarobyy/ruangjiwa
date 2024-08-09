import { getForumMessage, postForumMessage } from "@/mongoMethods/chatForum";

export const POST = async (req) => {
    try {
        const data = await req.json();

        await postForumMessage(data);
        return Response.json({
            message: "Success"
        });

    } catch (error) {
        console.error(error.message);
        return Response.json({
            message: "Failed"
        })
    }
}

export const GET = async ({params}) => {
    try {
        const forumId = params.id;
        const res = await getForumMessage(forumId);

        return Response.json({
            message: "Success",
            data: res
        })
    } catch (error) {
        console.error(error.message);
        return Response.json({
            message: "Failed",
            data: null
        })
    }
}