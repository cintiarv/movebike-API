import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    },
    name: {
        type: String, 
        trim: true, 
        required: true
    },
    email: {
       type: String, 
       required: true,
       trim: true, 
       match: /.*@\..*/ 
    },
    password: {
        type: String, 
        required: true
    },
    ID: {
        type: Image, 
        required: true
    },
    registrationDate: {
        type: Date,
        Default: Date.now
    },
    Tel : {
        type: Number,
        required: true
    }
   
})

export const User = mongoose.model('user', userSchema)