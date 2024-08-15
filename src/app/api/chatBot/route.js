import { mongoPostChatBotRoom} from "@/mongoMethods/chatBot";

// post new chat bot room
export const POST = async (req) => {
    try {
        const data = await req.json();
    
        await mongoPostChatBotRoom(data);
    
        return Response.json({
            message: "Success"
        });
    } catch (error) {
        console.error(error.message);
        return Response.json({
            message: "Failed"
        })
    }
};
