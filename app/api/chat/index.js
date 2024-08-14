import mongoose from "mongoose";

const ChatSchema = new mongoose.Schema({
    statusMessage:String,
    statusCode:Number,

    konsulId: string,
    title: {type: String, require:true},
    userId: {type: String, require:true},
    doctorId: {type: String, require:true},
    userName: {type: String, require:true},
    doctorName: {type: String, require:true},
    messages: [
            {            
                messageId:{type: String, require:true}, //(dari konsulId)
                sender: {type: String, require:true}, //(userId/doctorId)
                name: {type: String, require:true},
                message: {type: String, require:true},
                }
                ]
})