import { mongoGetAllDokter } from "@/mongoMethods/dokter"

export const GET = async () => {
    try {
        const response = await mongoGetAllDokter();
        return Response.json({
            message: "Success",
            data: response
        });
    } catch (error) {
        console.error(error.message);
        return Response.json({
            message: "Failed",  
            data: []
        })
    }
}