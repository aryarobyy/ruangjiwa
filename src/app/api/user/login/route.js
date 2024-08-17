import jwtGenerate from "@/hooks/jwtGenerate";
import { mongoGetUserByUsername } from "@/mongoMethods/user";
import bcrypt from "bcryptjs";
import Joi from "joi";

const schema = Joi.object({
    username: Joi.string().min(6).max(30).required(),
    password: Joi.string().min(6).required(),
})

export const POST = async (req, res) => {
    try {
        const data = await req.json();
        const {error, value} = schema.validate(data);

        if(error) {
            throw new Error(error.details[0].message);
        };

        const user = await mongoGetUserByUsername(data.username);

        if(!user) throw new Error("Email atau password kamu mungkin salah");
 
        const isPasswordValid = await bcrypt.compare(data.password, user.password);

        if(!isPasswordValid) throw new Error("Email atau password mungkin salah");

        const { token } = jwtGenerate(user.userId);
        
        return Response.json({ 
            message: "Success", 
            token,
            userData: user
        });
    } catch (error) {
        console.error(error.message);
        return Response.json({
            message: error.message,
        });
    }
};