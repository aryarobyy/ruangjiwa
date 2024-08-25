import { mongoGetPdfById } from "@/mongoMethods/pdf";

export const GET = async (req, {params}) => {
    try {
        const pdfId = params.id;

        const response = await mongoGetPdfById(pdfId);

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