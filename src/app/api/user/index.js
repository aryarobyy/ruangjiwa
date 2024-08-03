import mongoose from 'mongoose';
import { auth } from '../auth';

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

const createUser = (req, res) => {
    auth(req,res)
    newUser.save()
    .then((user) => {
        res.status(201).json({ "status": 201, "data": user });
    })
    .catch((e) => {
        res.status(400).json(e)
        })
}

const getUser = (req, res) => {
    auth(req, res)
    User.find(req, query)
    .then((r) => {
        if(r.length) 
            return res.status(200).json(data)
    }).catch((e) => {
        return res.status(400).send(e)
    })
}

const updateUser = (req, res) => {
    auth(req, res)
    User.findOneAndUpdate({_id:req}, req.body)
    .then((r) => {
        if(r){
            User.findById(req)
            .then((newR) => { 
                return res.status(200).json({"status": 200,"data":newR})
            })
        } else {
            return res.status(200).json({"status":200, "data":newR})
        }
    }) .catch((e) => {
        res.status(400).json(encodeURIComponent)
    })
}
export { User, createUser, getUser, updateUser}