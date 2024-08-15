import { mongoPostDonate, mongoGetAllDonate } from "@/mongoMethods/donate";

export const POST = async (req, res) => {
    try {
        const data = await req.json()

        await mongoPostDonate(data);
        return Response.json({message: "Success"});
    } catch (error) {
        console.error(error.message);
        return Response.json({
            message: "Failed"
        })
    }
};


export const GET = async () => {
    try {
        const response = await mongoGetAllDonate();

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