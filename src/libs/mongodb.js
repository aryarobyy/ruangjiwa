import {MongoClient} from 'mongodb';

const uri = process.env.MONGODB_URI;
const db = process.env.MONGO_DB;

if(!uri) throw new Error("Masukkan env mongo uri");
if(!db) throw new Error("Masukkan env mongo db");

const connectDb = async () => {
    const client = new MongoClient(uri);
    await client.connect();
    const database = client.db(db)

    return {client, database};
};

export default connectDb;