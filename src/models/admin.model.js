import mongoose from 'mongoose'

const adminSchema = new mongoose.Schema({
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'admin'
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
    location: {
        type: String, 
        required: true
    },
    Tel: {
        type: Number,
        required: true
    }
   
})

export const Admin = mongoose.model('admin', adminSchema)