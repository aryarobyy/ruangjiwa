import connectDb from "@/libs/mongodb";

const collectionName = 'activities';


export const mongoUpdateArtikelActivitie = async (username) => {
    try {
        const {client, database} = await connectDb();
        const col = database.collection(collectionName);
        
        const res = await col.updateOne(
            {creator: username},
            {
                $inc: {sumArtikel: 1}
            }
        )
        await client.close();

        return res;
    } catch (error) {
        throw Error(error.message);
    }
};

export const mongoPostActivieDoc = async (data) => {
    try {
        const {client, database} = await connectDb();
        const col = database.collection(collectionName);
        
        await col.insertOne(data);
        await client.close();
        
    } catch (error) {
        throw new Error(error.message);
    }
}

export const mongoGetActivie = async (creator) => {
    try {
        const {client, database} = await connectDb();
        const col = database.collection(collectionName);
        
        const res = await col.findOne({creator});
        await client.close();

        return res;
    } catch (error) {    
        throw new Error(error.message);
    }
}

export const mongoGetAllActivitie = async () => {
    try {
        const {client, database} = await connectDb();
        const col = database.collection(collectionName);
        
        const res = await col.find().toArray();
        await client.close();
    
        return res;
    } catch (error) {    
        throw new Error(error.message);
    }
}

export const mongoDeleteActivitie = async (creator) => {
    try {
        const {client, database} = await connectDb();
        const col = database.collection(collectionName);
        
        await col.deleteOne({creator});
        await client.close();
    
        return "Success";
    } catch (error) {    
        throw new Error(error.message);
    }

}