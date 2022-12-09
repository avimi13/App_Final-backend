import mongoose from "mongoose";

const productsoapSchema = new mongoose.Schema({
    id: String,
    image: String,
    name: String,
    price: String,
});

export const MoreProd = mongoose.model('MorProducts', productsoapSchema);