import connectDb from "@/libs/mongodb"

const collectionName = "konsul_chat";;

// Add new Konsul 
export const mongoPostKonsul = async (data) => {
    try {
        const {client, database} = await connectDb();
        const col = database.collection(collectionName);
        
        const res = await col.insertOne(data);
        await client.close();

        return res;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const mongoGetAllKonsul = async () => {
    try {
        const {client, database} = await connectDb();
        const col = database.collection(collectionName);

        const res = await col.find({}).toArray();
        await client.close();

        return res;
    } catch (error) {
        throw new Error(error.message);
    }
};


export const mongoGetKonsulById = async (konsulId) => {
    try {
        const {client, database} = await connectDb();
        const col = database.collection(collectionName);

        const res = await col.findOne({"konsulId": konsulId});
        await client.close();

        return res;
    } catch (error) {
        throw new Error(error.message);
    }
}

// stream konsul 
  export const monitorMessagesChanges = async () => {
    try {
      const {client, database} = await connectDb();
      const col = database.collection('konsulChat');

      const pipeline = [
        {
          $match: {
            'fullDocument.konsulId': "testingId",
            'updateDescription.updatedFields.messages': {$exists: true}
          }
        }
      ]

      const changeStream = col.watch(pipeline);

      changeStream.on('change', change => {
        console.log('change detected in message', change);
      })
      
      req.on('close', () => {
        changeStream.close();
        client.close();
        res.end();
      });
    } catch (error) {
      console.error(error.message);
    }
  }

  export const mongoPostMessageKonsul = async (data, konsulId) => {
    try {
      const {client, database} = await connectDb();
      const col = database.collection(collectionName);

      await col.updateOne(
        {konsulId},
        {
          $push: {messages: data}
        }
      )
      await client.close();
      return {message: "Success"}
    } catch (error) {
      
    }
  }