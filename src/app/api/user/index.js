import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    id: {type: String, require: true},
    age: {type: String, require: true},
    role: {type: String, require: true},
    name: {type: String, require: true},
    username: {type: String, require: true},
    email: {type: String, require: true},
    password: {type: String, require: true, minLength : 8},
    chatId: {type: String},
    penyakit: {type: String}
})

const User = mongoose.model('User', UserSchema)

export default User

