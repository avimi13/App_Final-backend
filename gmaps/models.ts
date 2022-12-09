import mongoose from "mongoose";

const MapsSchema = new mongoose.Schema({
    id: String,
    name: String,
    description: String,
    latitude: Number,
    longitude: Number
});

export const Maps = mongoose.model('Maps', MapsSchema);