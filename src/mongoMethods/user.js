import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    age: { type: String, required: true },
    role: { type: String, required: true },
    name: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true, minLength: 8 },
    chatId: { type: String },
    penyakit: { type: String },
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export const registerUser = async (body) => {
    const newUser = new User(body);
    await newUser.save();
    return newUser;
};

export const getUser = async (body) => {
    const user = await User.findOne(body);
    return user;
};