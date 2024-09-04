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

export const mongoGetAllDokter = async () => {
    try {
        const {client, database} = await connectDb();
        const col = database.collection(collectionName);

        const res = await col.find({}).toArray();
        console.log("Isi dokter: ",res)
        await client.close();

        return res;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const mongoUpdateApproved = async (username) => {
    try {
        const {client, database} = await connectDb();
        const col = database.collection(collectionName);
    
        await col.updateOne(
            {username},
            {
                $set: {isApproved: true}
            }
        );
        await client.close();
        return {message: "Success"};
    } catch (error) {
        throw new Error(error.message);
    }
};

export const mongoDeleteDokterByUsername = async (username) => {
    try {
        const {client, database} = await connectDb();
        const col = database.collection(collectionName);
        
        await col.deleteOne({username});
        
        await client.close();

        return {message: "Success"};
    } catch (error) {
        throw new Error(error.message);
    }
}

export const mongoGetArtikelByDokter = async (creatorId) => {
    try {
        const {client, database} = await connectDb();
        const col = database.collection("artikel");   
    
        const res = await col.find({creatorId}).toArray();
        await client.close();
        
        return res;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const mongoUpdateDokter = async (data) => {
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
