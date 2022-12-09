import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
    id: String,
    name: String,
    image: String,
    follow: Number,
    stores: Number,
});

export const Clients = mongoose.model('Client', clientSchema);