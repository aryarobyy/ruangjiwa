import connectDB from "../db";
import { addDonate, getDonate } from "@/mongoMethods/donate";

export const POST = async (req) => {
    await connectDB()

    try{
        const body = await req.json()
        console.log("Recieve Body: ", body)
        const newDonate = await addDonate(body)
        return  new Response(JSON.stringify({ status: 201, data: newDonate }), { status: 201 });
    } catch(error){
        console.error('Error:', error.message);
        return new Response(JSON.stringify({ status: 400, error: error.message }), { status: 400 });
    }
}


export const GET = async (req) => {
    await connectDB()
    try {
        const { searchParams } = new URL(req.url);
        const query = Object.fromEntries(searchParams.entries());
        console.log('Received query:', query);

        const donates = await getDonate(query);
        return new Response(JSON.stringify({ status: 200, data: donates }))
    } catch (error) {
        return new Response(JSON.stringify({ status: 500, error: 'Internal Server Error' }))
    }
}   