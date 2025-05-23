import { mongoGetMessageChatBot, mongoPostMessageChatBot } from "@/mongoMethods/chatBot";

export const POST = async (req, {params}) => {
    try {
        const data = await req.json();
        const messageId = params.id;

        await mongoPostMessageChatBot(data, messageId);

        return Response.json({message: "Success"});
    } catch (error) {
        console.error(error.message);
        return Response.json({message: "Failed"});
    };
}

export const GET = async ({params}) => {
    try {
        const messageId = params.id;

        const res = await mongoGetMessageChatBot(messageId);
        return Response.json({
            message: "Success",
            data: res
        })        
    } catch (error) {
        return Response.json({
            message: "Failed",
            data: null
        })
        
    }
}