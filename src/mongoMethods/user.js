import connectDb from "@/libs/mongodb";
import { ObjectId } from "mongodb";

const collectionName = 'user';

export const postUser = async (data) => {
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

export const getAllUser = async () => {
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

export const getUserById = async (idUser) => {
    try {
        const {client, database} = await connectDb();
        const col = database.collection(collectionName);
        const id = Number(idUser)

        const res = await col.findOne({"userId": id});
        await client.close();

        return res;
    } catch (error) {
        throw new Error(error.message);
    }
}