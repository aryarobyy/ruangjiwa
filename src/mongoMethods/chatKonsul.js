import connectDb from "@/libs/mongodb"

const collectionName = "konsul_message"

export const getKonsulMessage = async (messageId) => {
    try {
        const {client, database} = await connectDb();
        const col = database.collection(collectionName);

        const res = await col.find({messageId: messageId}).toArray();
        await client.close();

        return res;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const postKonsulMessage = async (data) => {
    try {
        const {client, database} = await connectDb();
        const col = database.collection(collectionName);

        const res = await col.insertOne(data);
        client.close;

        return res;
    } catch (error) {
        throw Error(error.message);
    };
};