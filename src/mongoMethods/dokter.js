import connectDb from "@/libs/mongodb";

const collectionName = 'dokters';

export const mongoGetDokterByUsername = async (username) => {
    const {client, database} = await connectDb();
    const col = database.collection(collectionName);
    
    const res = await col.findOne({username});
    await client.close();

    return res;
};

export const mongoPostDokter = async (data) => {
    try {
        const {client, database} = await connectDb();
        const col = database.collection(collectionName);

        const res = await col.insertOne(data);
        await client.close();

        return res;
    } catch (error) {
        throw Error(error.message);
    }
}

