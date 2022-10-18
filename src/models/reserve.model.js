import mongoose from 'mongoose'

const reserveSchema = new mongoose.Schema({
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'admin' //a que rol pertenece?
    },
    vehicle: {
        type: String, 
        trim: true, 
        required: true
    },
    costumer: {
        type: String, 
        required: true
    },
    price: {
       type: Number, 
       required: true,
       trim: true, 
    },
    initialDate: {
        type: Date, 
        required: true
    },
    finalDate: {
        type: Date,
        required: true
    },
    location : {
        type: String,
        required: true
    },
    tel:{
        type: Number, 
        required: true
    },
    email: {
        type: String, 
        required: true,
        match: /.*@\..*/ 
    },
    status: {
        type:Number,
        enum: ['reservada', 'en camino', 'entregado', 'cancelado'],
        required: true
    },
    payType: {
        type: String, 
        required: true
    }
   
})

export const Reserve = mongoose.model('reserve', reserveSchema)