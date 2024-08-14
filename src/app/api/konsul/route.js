import { getAllKonsul, postKonsul } from "@/mongoMethods/konsul";



export const POST = async (req) => {
    try {
        const data = await req.json();

        await postKonsul(data);

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

export const GET = async () => {
    try {
        const response = await getAllKonsul();

        return Response.json({
            message: "Success",
            data: response
        });
    } catch (error) {
        console.error(error.message);
        return Response.json({
            message: "Failed",
            data: []
        });
    };
};