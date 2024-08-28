import { messages } from "@/components/adminComponent/data";
import { mongoUpdateArtikelActivitie } from "@/mongoMethods/activitie";
import { mongoDeleteAllArtikel, mongoGetAllArtikel, mongoPostArtikel} from "@/mongoMethods/artikel";
import Joi from "joi";
import { v4 as uuidv4 } from "uuid";
const schema = Joi.object({
    title: Joi.string().min(5).required(),
    description: Joi.string().required(),
    imgUrl: Joi.string().required()
}).unknown();

export const POST = async (req, res) => {
    try {
        const data = await req.json();
        const {error, value} = schema.validate(data);
        if(error) throw new Error(error.details[0].message);
        
        const uuid = uuidv4()
        const newData = {...data, artikelId:uuid}

        await mongoPostArtikel(newData);
        await mongoUpdateArtikelActivitie(newData.creatorId);

        return Response.json({message: "Success"});
    } catch (error) {
        console.error(error.message);
        return Response.json({
            message: error.message
        })
    }
};

export const GET = async () => {
    try {
        const response = await mongoGetAllArtikel();

        return Response.json({
            message: "Success",
            data: response
        });
    } catch (error) {
        console.error(error.message);
        return Response.json({
            message: "Failed",  
            data: []
        })
    }
}

export const DELETE = async () => {
    try {
        const response = await mongoDeleteAllArtikel();
        return Response.json({
            message: "Success"
        });
    } catch (error) {
        console.error(error.message);
        return Response.json({message: error.message})
    }
}