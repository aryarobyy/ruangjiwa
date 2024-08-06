import mongoose from "mongoose";

const DonateSchema = new mongoose.Schema({
    statusMessage: String,
    statusCode: Number,

    userId : {type: mongoose.ObjectId, require: true},
    amount : {type: Number, require: true},
    createdAt: {type: String, default: Date.now}, 
    updatedAt: {type: String, default: Date.now}
})

DonateSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

DonateSchema.pre('findOneAndUpdate', function (next) {
    this.set({ updatedAt: Date.now() });
    next();
});

const Donate = mongoose.models.Donate || mongoose.model('Donate', DonateSchema)

export const addDonate = async (body) => {
    const newDonate = new Donate(body);
    await newDonate.save();
    return newDonate;
};

export const getDonate = async (body) => {
    const donate = await Donate.findOne(body);
    return donate;
};