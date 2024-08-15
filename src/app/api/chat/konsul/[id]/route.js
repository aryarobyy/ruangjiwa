import { mongoGetKonsulMessage, mongoPostKonsulMessage } from "@/mongoMethods/chatKonsul";

export const POST = async (req) => {
    try {
        const data = await req.json();

        await mongoPostKonsulMessage(data);
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
        const konsulId = params.id;
        const res = await mongoGetKonsulMessage(konsulId);

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