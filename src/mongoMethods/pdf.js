import connectDb from "@/libs/mongodb"

const collectionName = "pdf";

export const mongoPostPdf = async (data) => {
    try {
      const {client, database} = await connectDb(); 
      const col = database.collection(collectionName); 
  
      const res = await col.insertOne(data);
      await client.close();
      return res;
    } catch (e) {
      throw new Error(e.message);
    }
  };
  
export const mongoGetPdfById = async (pdfId) => {
    try{
        const {client, database} = await connectDb();
        const col = database.collection(collectionName);

        const res = await col.findOne({pdfId})
        await client.close()

        return res
    } catch (error) {
        throw new Error(error.message);
    }
}

export const mongoGetAllPdf = async () => {
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
