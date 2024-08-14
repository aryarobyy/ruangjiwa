import connectDb from "@/libs/mongodb";

const collectionName = 'artikel';

// Add new artikel
export const mongoPostArtikel = async (data) => {
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
export const mongoGetAllArtikel = async () => {
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
export const mongoGetArtikelById = async (idArtikel) => {
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