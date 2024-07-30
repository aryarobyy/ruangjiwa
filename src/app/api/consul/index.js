import mongoose from "mongoose";

const ConsulSchema = new mongoose.Schema({
    statusMessage: String,
    statusCode: Number,

    konsulId: {type: String, require:true},
    title: {type: String, require:true},
    userId: {type: String, require:true},
    dokterId: {type: String, require:true},
    userName: {type: String, require:true},
    doctorName: {type: String, require:true},
    messages: [
        {            
            messageId: {type: String, require:true}, //dari user
            sender: {type: String, require:true}, //dari dokter
            name: {type: String, require:true},
            message: {type: String, require:true},
        }
    ]
})

const Consul = mongoose.model('Consul', ConsulSchema)

export default Consul