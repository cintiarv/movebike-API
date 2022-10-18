import mongoose from 'mongoose'

const motoSchema = new mongoose.Schema({
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
    image: {
        type: Image, 
        required: true
    },
    ID: {
       type: String, 
       required: true,
       trim: true, 
    },
    amount: {
        type: Number, 
        required: true
    },
    model: {
        type: String,
        required: true
    },
    minAge : {
        type: Number,
        required: true
    },
    vehicleType:{
        type: String, 
        required: true
    },
    assurance: {
        type: Number, 
        required: true
    },
    price: {
        type:Number,
        required: true
    },
    insurance: {
        type: String, 
        required: true
    }
   
})

export const Moto = mongoose.model('moto', motoSchema)