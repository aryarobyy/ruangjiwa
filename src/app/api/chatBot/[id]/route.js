import { mongoDeleteChatBotRoom, mongoGetChatBotRoom } from "@/mongoMethods/chatBot";

export const GET = async (req, {params}) => {
    try {
        const chatId = params.id;
        const res = await mongoGetChatBotRoom(chatId);

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

export const DELETE = async (req, {params}) => {
    try {
        const chatId = params.id;
        await mongoDeleteChatBotRoom(chatId);

        return Response.json({
            message: "Success"
        })
    } catch (error) {
        console.error(error.message);
        return Response.json({
            message: "Failed"
        })
    }
}

