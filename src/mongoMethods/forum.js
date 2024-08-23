import connectDb from "@/libs/mongodb"

const collectionName = "forum";

export const mongoPostForum = async (data) => {
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

export const mongoGetForumById = async (forumId) => {
    try {
        const {client, database} = await connectDb();
        const col = database.collection(collectionName);

        const res = await col.findOne({forumId});
        await client.close();

        return res;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const mongoGetAllForum = async () => {
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