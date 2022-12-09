import mongoose from "mongoose";

const placesSchema = new mongoose.Schema({
    id: String,
    img: String,
});

export const Place = mongoose.model('Place', placesSchema);