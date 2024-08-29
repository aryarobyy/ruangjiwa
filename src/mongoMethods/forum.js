import connectDb from "@/libs/mongodb"

const collectionName = "forum";

export const mongoPostForum = async (data) => {
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

export const mongoGetForumById = async (forumId) => {
    try {
        const {client, database} = await connectDb();
        const col = database.collection(collectionName);

        const res = await col.findOne({forumId});
        await client.close();

        return res;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const mongoGetAllForum = async () => {
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

export const mongoPostComment = async (data, commentId) => {
    try {
        const { client, database } = await connectDb();
        const col = database.collection(collectionName);

        console.log("Comment Id:",commentId)
        const result = await col.updateOne(
            { forumId: commentId },
            { $push: { comments: data } }
        );
        console.log("Result: ", result)
        console.log("Update Result:", result);
        client.close();
        return { message: "Success" };
    } catch (error) {
        console.error("MongoDB Error:", error.message);
        throw new Error(error.message);
    }
}

export const mongoGetComment = async (forumId) => {
    try {
      const { client, database } = await connectDb();
      const col = database.collection(collectionName);
  
      const res = await col.findOne({ forumId })
      await client.close();
  
      console.log("Comments fetched:", res); // Log the fetched comments
      return res;
    } catch (error) {
      throw new Error(error.message);
    }
  };


// export const mongoGetComment = async () => {
//     try {
//         const {client,database} = await connectDb();
//         const col = database.collection(collectionName);

//         await col.find({}).toArray();
//         client.close()

//         return res;
//     } catch (error) {
//         throw new Error(error.message);
//     }
// }



// export const mongoGetComment = async (forumId) => {
//     try {
//       const { client, database } = await connectDb();
//       const col = database.collection('comments');
  
//       const objectId = ObjectId.isValid(forumId) ? new ObjectId(forumId) : forumId;
//       const res = await col.find({ forumId: objectId }).toArray();
  
//       client.close();
//       return res;
//     } catch (error) {
//       console.error("Error querying MongoDB:", error);
//       throw new Error(error.message);
//     }
//   };