import connectDb from "@/libs/mongodb"

const collectionName = "konsul";

// Add new Konsul 
export const postKonsul = async (data) => {
    try {
        const {client, database} = await connectDb();
        const col = database.collection(collectionName);
        
        const res = await col.insertOne(data);
        await client.close();

        return res;
    } catch (error) {
        throw new Error(error.message);
    }
};


export const getAllKonsul = async () => {
    try {
        const {client, database} = await connectDb();
        const col = database.collection(collectionName);

        const res = await col.find({}).toArray();
        await client.close();

        return res;
    } catch (error) {
        throw new Error(error.message);
    }
};


export const getKonsulById = async (konsulId) => {
    try {
        const {client, database} = await connectDb();
        const col = database.collection(collectionName);

        const res = await col.findOne({"konsulId": konsulId});
        await client.close();

        return res;
    } catch (error) {
        throw new Error(error.message);
    }
}