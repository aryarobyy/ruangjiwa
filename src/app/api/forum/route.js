import { postForum, getAllForum} from "@/mongoMethods/forum";
import { v4 as uuidv4 } from "uuid";

export const POST = async (req) => {
    try {
        const data = await req.json();
        const uuid = uuidv4()

        const newData = {...data, forumId:uuid}

        await postForum(newData);
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

export const GET = async () => {
    try {
        const response = getAllForum();

        return Response.json({
            message: "Success",
            data: response
        })
    } catch (error) {
        console.error(error.message);
        return Response.json({
            message: "Failed",
            data: []
        })
    }
}   