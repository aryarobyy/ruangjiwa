import { mongoGetAllDokter } from "@/mongoMethods/dokter";
import jwtGenerate from "@/hooks/jwtGenerate";
import { cookies } from 'next/headers';

export const GET = async (req) => {
    try {
        cookies();

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
        });
    }
};
