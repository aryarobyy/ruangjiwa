import { getKonsulMessage } from "@/mongoMethods/chatKonsul";
import { getKonsulById } from "@/mongoMethods/konsul";

export const GET = async ({params}) => {
    try {
        const konsulId = params.id;

        const response = await getKonsulById(konsulId);
        const message = await getKonsulMessage(konsulId);

        return Response.json({
            message: "Success",
            data: {
                ...response,
                message: message
            }
        });

    } catch (error) {
        console.error(error.message);
        return Response.json({
            message: "Failed",
            data: null
        })
    }
};

