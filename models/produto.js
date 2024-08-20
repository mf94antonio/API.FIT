import mongoose from "mongoose";

const produtosSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true,
    },
    price:{
        type: String,
        required: true,
    },
    amount:{
        type: String,
        required: true,
    },
    
    description:{
        type: String,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now(),
    },
})

export default mongoose.model('Produto', produtosSchema)