import connectDb from "@/libs/mongodb";
import { ObjectId } from "mongodb";

const collectionName = 'artikel';

// Add new artikel
export const postArtikel = async (data) => {
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

// Get all artike
export const getAllArtikel = async () => {
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

// Get specific artikel
export const getArtikelById = async (idArtikel) => {
    try {
        const {client, database} = await connectDb();
        const col = database.collection(collectionName);
        const id = Number(idArtikel)

        const res = await col.findOne({"artikelId": id});
        await client.close();

        return res;
    } catch (error) {
        throw new Error(error.message);
    }
}