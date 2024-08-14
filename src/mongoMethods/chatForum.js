import connectDb from "@/libs/mongodb"

const collectionName = "forum_message"

export const getForumMessage = async (forumId) => {
    try {
        const {client, database} = await connectDb();
        const col = database.collection(collectionName);

        const res = await col.find({messageId: forumId}).toArray();
        await client.close();

        return res;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const postForumMessage = async (data) => {
    try {
        const {client, database} = await connectDb();
        const col = database.collection(collectionName);

        const res = await col.insertOne(data);
        client.close();

        return res;
    } catch (error) {
        throw Error(error.message);
    }
}