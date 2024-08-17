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

export const mongoGetUserById = async (userId) => {
    try {
        const {client, database} = await connectDb();
        const col = database.collection(collectionName);
        
        const res = await col.findOne({userId});
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

export const mongoUpdateUser = async (username, data) => {
    try {
        const {client, database} = await connectDb();
        const col = database.collection(collectionName);

        const response = await col.updateOne(
            {username},
            {$set: data}
        )
        
        await client.close()

        return response
    } catch(e){
        throw new Error(e.message)
    }
}