import connectDb from "@/libs/mongodb";
import mongoose from "mongoose";

// const ArtikelSchema = new mongoose.Schema({

//     adminId: {type: string, require: true},
//     artikelId: {type: string, require: true},
//     name: {type: string, require: true},
//     title: {type: string, require: true},
//     description: {type: string, require: true},
//     date: {type: string, require: true},
// });

// const Artikel = mongoose.models.Artikel || mongoose.model('Artikel', ArtikelSchema);

const collectionName = 'Artikel';

export const postArtikel = async (data) => {
    try {
        const {client, database} = await connectDb();
        const col = database.collection(collectionName);

        const res = await col.insertOne(data)
        await client.close();
        return res;
        // const newArtikel = new Artikel(data);
        // await newArtikel.save();
        // return {status: "success"};
    } catch (error) {
        console.error(error.message);
        throw Error(error.message);
    }
};

export const getAllArtikel = async () => {
    try {
        const {client, database} = await connectDb();
        const col = database.collection(collectionName);

        const res = await col.find({}).toArray();
        await client.close();
        return res;

    } catch (error) {
        console.error(error.message);
        throw new Error(error.message);
    }
}
