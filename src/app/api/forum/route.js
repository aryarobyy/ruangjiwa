import { postForum, getAllForum} from "@/mongoMethods/forum";
import { v4 as uuidv4 } from "uuid";

export const POST = async (req) => {
    try {
        const data = await req.json();

        const uuid = uuidv4()
        const forumId = {...data, id:uuid}

        console.log('Received data:', data);
        await postForum(forumId);
        return new Response(JSON.stringify({ status: 201 }));
    } catch (error) {
        console.error('Error:', error.message);
        return new Response(JSON.stringify({ status: 400, error: error.message }));
    }
}

export const GET = async (req) => {
    try {
        const { searchParams } = new URL(req.url);
        const query = Object.fromEntries(searchParams.entries());
        console.log('Received query:', query);

        const forums = await getAllForum(query);
        return new Response(JSON.stringify({ status: 200, data: forums }))
    } catch (error) {
        return new Response(JSON.stringify({ status: 500, error: 'Internal Server Error' }))
    }
}   