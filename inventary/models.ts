import mongoose from "mongoose";

const inventarySchema = new mongoose.Schema({
    id: String,
    name: String,
    service: String,
    description: String,
    horario: Number,
    inventary: Number,
    sales: Number,
    price: Number,
    disponible: Number,
});

export const Recipe = mongoose.model('Inventary', inventarySchema);