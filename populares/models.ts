import mongoose from "mongoose";

const popularSchema = new mongoose.Schema({
    id: String,
    image: String,
    name: String,
 
});

export const Populares = mongoose.model('Populares', popularSchema);