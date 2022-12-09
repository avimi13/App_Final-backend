import mongoose from "mongoose";

const tendenciasSchema = new mongoose.Schema({
    id: String,
    image: String,
    nameProduct: String,
});

export const Tendencia = mongoose.model('Tendencias', tendenciasSchema);