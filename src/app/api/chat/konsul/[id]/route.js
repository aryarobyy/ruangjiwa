// import { mongoGetKonsulMessage, mongoPostKonsulMessage } from "@/mongoMethods/chatKonsul";
import { mongoPostMessageKonsul } from "@/mongoMethods/konsul";

export const POST = async (req, {params}) => {
    const konsulId = params.id;
    try {
        const data = await req.json();

        await mongoPostMessageKonsul(data, konsulId);
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

// export const GET = async ({params}) => {
//     try {
//         const konsulId = params.id;
//         const res = await mongoGetKonsulMessage(konsulId);

//         return Response.json({
//             message: "Success",
//             data: res
//         })
//     } catch (error) {
//         console.error(error.message);
//         return Response.json({
//             message: "Failed",
//             data: null
//         })
//     }
// }