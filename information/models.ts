import mongoose from "mongoose";

const infoSchema = new mongoose.Schema({
    id: String,
    namePlaces: String,
    numberPhone: Number,
    places: String,
    socialmedia: String,
});

export const Information = mongoose.model('Information', infoSchema);