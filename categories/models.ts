import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    id: String,
    name: String,
    description: String,
    products: String,
    date: Number,
    avatar: String
});

export const Category = mongoose.model('Category', categorySchema);