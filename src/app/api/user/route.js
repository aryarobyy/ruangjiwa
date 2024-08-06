import connectDB from '../db';
import { getUser, registerUser } from '@/mongoMethods/user';

async function parseRequestBody(req) {
    const reader = req.body.getReader();
    const decoder = new TextDecoder('utf-8');
    let result = '';

    while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        result += decoder.decode(value);
    }

    return JSON.parse(result);
}

export const POST = async (req) => {
    await connectDB();

    try {
        const body = await parseRequestBody(req);
        console.log('Received body:', body);
        const newUser = await registerUser(body);
        return Response.json({ status: 201 })
    } catch (error) {
        return Response.json({ status: 400, error: error.message });
    }
};

export const GET = async (req) => {
    await connectDB();

    try {
        const { searchParams } = new URL(req.url);
        const query = Object.fromEntries(searchParams.entries());
        console.log('Received query:', query);
        
        const user = await getUser(query);
        return Response.json({ status: 200, data: user });
    } catch (error) {
        return Response.json({ status: 400, error: error.message }, { status: 400 });
    }
};
