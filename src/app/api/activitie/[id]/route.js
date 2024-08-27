import { mongoGetActivie } from "@/mongoMethods/activitie";
import { mongoGetArtikelById } from "@/mongoMethods/artikel";

export const GET = async (req, {params}) => {
    try {
        const activitieId = params.id;

        const response = await mongoGetActivie(activitieId);

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