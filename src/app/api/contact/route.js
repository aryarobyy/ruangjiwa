import { mongoPostContact } from "@/mongoMethods/contact";
import { v4 as uuidv4 } from "uuid";

export const POST = async (req) => {
    try {
        const data = await req.json();
        const uuid = uuidv4()

        const newData = {...data, contactId:uuid}

        await mongoPostContact(newData);
        return Response.json({
            message: "Success"
        })
    } catch (error) {
        console.error('Error:', error.message);
        return Response.json({
            message: "Failed"
        })
    }
}