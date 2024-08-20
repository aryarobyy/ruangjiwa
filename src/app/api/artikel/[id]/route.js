import { mongoDeleteArtikelById, mongoGetArtikelById, mongoUpdateArtikel } from "@/mongoMethods/artikel";

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

export const PUT = async (req, {params}) => {
    try {
        const data = await req.json();
        const artikelId = params.id;
    
        const response = await mongoUpdateArtikel(artikelId, data);
    
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

export const DELETE = async (req, {params}) => {
    try {
        const artikelId = params.id;
    
        const response = await mongoDeleteArtikelById(artikelId);
    
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