
import { getAllArtikel } from "@/mongoMethods/artikel";
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

// export default Article

const articleHandler = async (req, res) => {
    const {method} = req;
    
    switch (method) {
        case "GET": {

            res.status(200).json({
                message: "Hello world!"
            })
            // logic ambil data artikel dari mongo
            
            break;
        }
        case "POST": {

            // logic post data artikel ke mongo
            break;
        }
    
        default:
            break;
    }
}

export default articleHandler