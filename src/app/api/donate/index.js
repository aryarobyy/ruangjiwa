import mongoose from "mongoose";

const DonateSchema = new mongoose.Schema({
    statusMessage: String,
    statusCode: Number,

    donateId : {type: String, require: true},
    userId : {type: String, require: true},
    amount : {type: Number, require: true},
})

const Donate = mongoose.model('Donate', DonateSchema)

export default Donate