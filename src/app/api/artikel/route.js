import { getAllArtikel, postArtikel } from "@/mongoMethods/artikel";
import { v4 as uuidv4 } from "uuid";

export const POST = async (req, res) => {
    try {
        const data = await req.json()

        const uuid = uuidv4()
        const newData = {...data, id:uuid}

        await postArtikel(newData);
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
        const response = await getAllArtikel();

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