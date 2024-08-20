import { mongoUpdateUser } from "@/mongoMethods/user";

export const PUT = async (req) => {
    try {
        const { userId, ...data } = await req.json();

        if (!userId || Object.keys(data).length === 0) {
            return new Response(JSON.stringify({ message: "userId or data not found" }), {
                status: 400,
                headers: { "Content-Type": "application/json" }
            });
        }

        const user = await mongoUpdateUser(userId, data);

        if (!user) {
            return new Response(JSON.stringify({ message: "User not found or update failed." }), {
                status: 404,
                headers: { "Content-Type": "application/json" }
            });
        }

        return new Response(JSON.stringify({ 
            message: "Success", 
            userData: user 
        }), {
            status: 200,
            headers: { "Content-Type": "application/json" }
        });
    } catch (e) {
        console.error(e.message);
        return new Response(JSON.stringify({ message: e.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
};
