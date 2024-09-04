import { mongoGetAllDokter } from "@/mongoMethods/dokter";
export const GET = async () => {
    try {
        const response = await mongoGetAllDokter();
        return new Response(JSON.stringify({
            message: "Success",
            data: response
        }), {
            headers: {
                'Cache-Control': 'no-store'  //Buat disable caching
            }
        });
    } catch (error) {
        console.error(error.message);
        return new Response(JSON.stringify({
            message: "Failed",  
            data: []
        }), {
            headers: {
                'Cache-Control': 'no-store'  
            }
        });
    }
}
