import { mongoGetDokterByUsername, mongoUpdateApproved } from "@/mongoMethods/dokter";

export const GET = async (req, {params}) => {
    try {
        const creatorId = params.creatorId;

        const response = await (creatorId);

        return Response.json({
            message: "Success",
            data: response
        });
    } catch (error) {
        console.error(error.message);
        return Response.json({
            message: "Error",  
            data: []
        })
    }
}