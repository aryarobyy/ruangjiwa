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
export const mongoUpdateUser = async (userId, data) => {
    try {
        const { client, database } = await connectDb();
        const col = database.collection(collectionName);

        console.log("Updating user with username:", userId);
        console.log("Data to update:", data);

        const res = await col.updateOne(
            { userId }, 
            { $set: data }
        );

        console.log("Update result:", res);
        

        const updatedUser = await col.findOne({ userId }); 
        console.log("Updated User data:", updatedUser)

        await client.close();

        if (res.modifiedCount === 0) {
            throw new Error("Update failed or no changes made.");
        }

        return updatedUser;
    } catch (e) {
        console.error("Error updating user:", e);
        throw new Error("Failed to update user: " + e.message);
    }
};
