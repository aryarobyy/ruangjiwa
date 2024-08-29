import connectDb from "@/libs/mongodb";

const collectionName = 'user';

export const mongoPostUser = async (data) => {
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

export const mongoGetAllUser = async () => {
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


export const mongoGetUserByUsername = async (username) => {
    const {client, database} = await connectDb();
    const col = database.collection(collectionName);

    const res = await col.findOne({username});
    await client.close();

    return res;
}

export const mongoUpdateUser = async (data) => {
    try {
        const { client, database } = await connectDb();
        const col = database.collection(collectionName);

        await col.updateOne(
            { username: data.username }, 
            { $set: data }
        );
        await client.close();
    } catch (e) {
        console.error("Error updating user:", e);
        throw new Error("Gagal memperbarui data!");
    }
};
