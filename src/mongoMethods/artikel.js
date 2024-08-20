import connectDb from "@/libs/mongodb";

const collectionName = 'artikel';

// Add new artikel
export const mongoPostArtikel = async (data) => {
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

// Get all artike
export const mongoGetAllArtikel = async () => {
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

// Get specific artikel
export const mongoGetArtikelById = async (idArtikel) => {
    try {
        const {client, database} = await connectDb();
        const col = database.collection(collectionName);

        const res = await col.findOne({"artikelId": idArtikel});
        await client.close();

        return res;
    } catch (error) {
        throw new Error(error.message);
    }
}

// update artikel
export const mongoUpdateArtikel = async (artikelId, data) => {
    try {
        const {client, database} = await connectDb();
        const col = database.collection(collectionName);
        
        const res = await col.updateOne(
            {artikelId},
            {
                $set: {"title": data.title, "description": data.description, "imgUrl": data.imgUrl},
                $currentDate: {lastModified: true}
            }
        );
        await client.close();
        
        return res;
        
    } catch (error) {
        throw new Error(error.message);        
    }
}

export const mongoDeleteArtikelById = async (artikelId) => {
    try {
        const {client, database} = await connectDb();
        const col = database.collection(collectionName);
        
        const res = await col.deleteOne({artikelId});
        await client.close();
    
        return res;
    } catch (error) {
        throw new Error(error.message);
    }
}

// delete semua artikel
export const mongoDeleteAllArtikel = async () => {
    try {
        const {client, database} = await connectDb();
        const col = database.collection(collectionName);
        
        const res = await col.deleteMany({});
        await client.close();

        return res;
    } catch (error) {
        throw new Error(error.message);
    }
}