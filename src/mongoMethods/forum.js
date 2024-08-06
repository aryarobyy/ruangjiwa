import mongoose from "mongoose";

const ForumSchema  = new mongoose.Schema({
    statusMessage: String,
    statusCode: Number,

    title: {type: String, require:true},
    post: {type: String, require:true},
    userId: {type: mongoose.ObjectId, require:true},
    doctorId: {type: mongoose.ObjectId, require:false},
    createdAt: {type: String, default: Date.now}, 
    updatedAt: {type: String, default: Date.now}
})

ForumSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

ForumSchema.pre('findOneAndUpdate', function (next) {
    this.set({ updatedAt: Date.now() });
    next();
});

const Forum = mongoose.models.Forum || mongoose.model('Forum', ForumSchema);


export const addForum = async (body) => {
    const newForum = new Forum(body);
    await newForum.save();
    return newForum;
};

export const getForum = async (body) => {
    const forum = await Forum.find(body)
    return forum;
    }