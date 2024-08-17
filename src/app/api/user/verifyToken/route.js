import jwt from "jsonwebtoken";
import Joi from "joi";

const schema = Joi.object({
    username: Joi.string().min(6).max(30).required(),
    password: Joi.string().min(6).required(),
})

export const POST = async (req, res) => {
    const {token} = await req.json();
    try {
        const decode = jwt.verify(token, process.env.NEXT_PUBLIC_JWT_SECRET);

        return Response.json({ 
            message: "Success", 
            user: decode
        });
    } catch (error) {
        console.error(error.message);
        return Response.json({
            message: error.message,
        });
    }
};