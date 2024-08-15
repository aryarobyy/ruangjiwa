import { mongoGetArtikelById } from "@/mongoMethods/artikel";

export const GET = async (req, {params}) => {
    try {
        const artikelId = params.id;

        const response = await mongoGetArtikelById(artikelId);

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