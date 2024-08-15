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

export const mongoGetUserById = async (idUser) => {
    try {
        const {client, database} = await connectDb();
        const col = database.collection(collectionName);
        const id = Number(idUser)

        const res = await col.findOne({"userId": id});
        await client.close();

        return res;
    } catch (error) {
        throw new Error(error.message);
    }
}