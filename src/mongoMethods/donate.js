import connectDb from "@/libs/mongodb";
import { ObjectId } from "mongodb";

const collectionName = 'donate';

export const postDonate = async (data) => {
    try {
        const {client, database} = await connectDb();
        const col = database.collection(collectionName);

        const res = await col.insertOne(data)
        await client.close();

        return res;
    } catch (error) {
        throw Error(error.message);
    }
};

export const getAllDonate = async () => {
    try {
        const {client, database} = await connectDb();
        const col = database.collection(collectionName);

        const res = await col.find({}).toArray();
        await client.close();

        return res;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const getDonateById = async (idDonate) => {
    try {
        const {client, database} = await connectDb();
        const col = database.collection(collectionName);
        const id = Number(idDonate)

        const res = await col.findOne({"donateId": id});
        await client.close();

        return res;
    } catch (error) {
        throw new Error(error.message);
    }
}