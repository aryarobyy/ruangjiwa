import mongoose from 'mongoose';

const DoctorSchema = new mongoose.Schema({
    statusMessage: String,
    statusCode: Number,
    
    id: { type: String, required: true },
    age: { type: String, required: true },
    role: String,
    name: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true, minLength: 8 },
    chatId: [String],
    specialist: String
});

const Doctor = mongoose.model('Doctor', DoctorSchema);

export default Doctor;
