import { mongoPostUser, mongoGetAllUser, mongoGetUserByUsername } from "@/mongoMethods/user";
import { v4 as uuidv4 } from "uuid";
import bcrypt, { hash } from "bcryptjs";
import jwtGenerate from "@/hooks/jwtGenerate";
import Joi from "joi";
import { mongoGetDokterByUsername, mongoPostDokter } from "@/mongoMethods/dokter";
import { mongoPostActivieDoc } from "@/mongoMethods/activitie";

const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    username: Joi.string().min(6).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
    bio: Joi.string().min(250).required(),
    spesialis: Joi.string().required(),
}).unknown();

export const POST = async (req, res) => {
    try {
        const data = await req.json();
        const {error, value} = schema.validate(data);
        if(error) {
            throw new Error(error.details[0].message);
        };

        const isUserRegistered = await mongoGetDokterByUsername(data.username);

        if(isUserRegistered) throw new Error("Username sudah terdaftar, coba yang lain.");

        const uuid = uuidv4();
        
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(data.password, salt);

        const newData = {...data, userId: uuid, password: hashedPassword, role: 'dokter', isApproved: false};

        const token = jwtGenerate(uuid, res)
        await mongoPostDokter(newData);

        const activitieData = {
            activitieId: newData.userId,
            sumArtikel: 0,
            sumKonsul: 0,
            author: newData.name
        };
        await mongoPostActivieDoc(activitieData);
        return Response.json({ message: "Success", token });
    } catch (error) {
        console.error(error.message);
        return Response.json({
            message: error.message,
        });
    }
};