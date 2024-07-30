import mongoose from "mongoose";

const ForumSchema  = new mongoose.Schema({
    statusMessage: String,
    statusCode: Number,

    forumId: {type: String, require:true},
    title: {type: String, require:true},
    userId: {type: String, require:true},
    doctorId: {type: String, require:true},
    name: {type: String, require:true},
    forumChatId: {type: String, require:true},
    chat: {type: String, require:true},
})

const Forum = mongoose.model('Forum', ForumSchema)

export default Forum