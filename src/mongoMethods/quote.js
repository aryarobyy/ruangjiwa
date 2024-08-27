import connectDb from "@/libs/mongodb";

const collectionName = "quotes";

export const mongoPostQuote = async (data) => {
    try {
        const {client, database} = await connectDb();
        const col = database.collection(collectionName);
        
        const res = await col.insertOne(data);
        client.close();
        
        return res;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const mongoGetQuote = async (quoteId) => {
    try {
        const {client, database} = await connectDb();
        const col = database.collection(collectionName);

        const res = await col.findOne({quoteId});
        client.close();

        return res;
    } catch (error) {
        throw new Error(error.message);
    }
}