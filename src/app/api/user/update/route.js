import { mongoUpdateUser } from "@/mongoMethods/user";

export const PUT = async (req) => {
    try {
        const data = await req.json();

        if (!data.username || Object.keys(data).length === 0) {
            return new Response(JSON.stringify({ message: "userId or data not found" }), {
                status: 400,
                headers: { "Content-Type": "application/json" }
            });
        }

        await mongoUpdateUser(data);

        return Response.json({message: "Success"})
        
    } catch (e) {
        console.error(e.message);
        return new Response(JSON.stringify({ message: e.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
};
