import mongoose from "mongoose";

const ArticleSchema = new mongoose.Schema({
    statusMessage: String,
    statusCode: Number,

    adminId: {type: String, require:true},
    name: {type: String, require:true},
    articleId: {type: String, require:true},
    title: {type: String, require:true},
    description: {type: String, require:true},
    date: Date,
    messages: [
        {            
            messageId: {type: String, require:true}, //dari user
            sender: {type: String, require:true}, //dari dokter
            name: {type: String, require:true},
            message: {type: String, require:true},
        }
    ]
})

const Article = mongoose.model('Article', ArticleSchema)

export default Article