import { mongoUpdateUser } from "@/mongoMethods/user";

export const PUT = async (req) => {
    try{

        const { username, ...data} = await req.json();
        if (!username || !data) {
            return new Response(JSON.stringify({ message: "username atau data tidak ada" }), {
                status: 400,
                headers: { "Content-Type": "application/json" }
            });
        }
        const user = await mongoUpdateUser(username, data);
        
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
    } catch (e){
        console.error(e.message)
         return new Response(JSON.stringify({ message: e.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }


}