import { mongoGetActivie, mongoGetAllActivitie } from "@/mongoMethods/activitie";

export const GET = async (req) => {
    try {
        const response = await mongoGetAllActivitie();

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