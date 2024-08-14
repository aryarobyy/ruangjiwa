import connectDb from "@/libs/mongodb";

const collectionName = "bot_message";


// Method bikin room chat bot
export const mongoPostChatBotRoom = async (data) => {
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

export const mongoGetChatBotRoom = async (chatId) => {
    try {
        const {client, database} = await connectDb();
        const col = database.collection(collectionName);

        const res = await col.findOne({chatId});
        client.close();

        return res;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const mongoDeleteChatBotRoom = async (chatId) => {
    try {
        const {client, database} = await connectDb();
        const col = database.collection(collectionName);

        const res = await col.deleteOne({chatId});
        client.close();

        return res;
    } catch (error) {
        throw new Error(error.message);
    }
}


// ## Message ##

// Method post message di room chat bot
export const mongoPostMessageChatBot = async (data, messageId) => {
    try {
        const {client, database} = await connectDb();
        const col = database.collection(collectionName);
        
        await col.updateOne(
            {chatId: messageId},
            {
                $push: {message: data}
            }
        )
        client.close();
        return {message: "Success"}
    } catch (error) {
        throw new Error(error.message);
    };
};

// method get semua message di room chat bot
export const mongoGetMessageChatBot = async (chatId) => {
    try {
        const {client, database} = await connectDb();
        const col = database.collection(collectionName);
        
        const res = await col.find({chatId}).toArray();
        client.close();

        return res;
    } catch (error) {
        throw new Error(error.message);
    }
}

