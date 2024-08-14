import connectDb from "@/libs/mongodb";

const collectionName = "bot_message";


// Method bikin room chat bot
export const postChatBotRoom = async (data) => {
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

export const getChatBotRoom = async (chatId) => {
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


// ## Message ##

// Method post message di room chat bot
export const postMessageChatBot = async (data, messageId) => {
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
export const getMessageChatBot = async (chatId) => {
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

