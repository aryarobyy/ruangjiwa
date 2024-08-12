import { getChatBotRoom } from "@/mongoMethods/chatBot";

export const GET = async (req, {params}) => {
    try {
        const chatId = params.id;
        const res = await getChatBotRoom(chatId);

        return Response.json({
            message: "Success",
            data: res
        })
    } catch (error) {    
        console.log(error.message)
        return Response.json({
            message: "Failed",
            data: null
        })
    }
}

