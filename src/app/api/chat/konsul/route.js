import { postKonsulMessage } from "@/mongoMethods/chatKonsul";


export const POST = async (req) => {
    try {
        const data = await req.json();

        await postKonsulMessage(data);
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