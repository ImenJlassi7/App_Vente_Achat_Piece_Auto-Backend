const mongoose = require('mongoose');

const autoPartSchema = new mongoose.Schema({
    name: { type: String, required: true },
    brand: { type: String, required: true },
    condition: { type: String, required: true },
    description: { type: String },
    images: { type: [String] }, // Array of image URLs
    price: { type: Number, required: true },
    category: { type: String, enum: ['Voiture', 'Motors'], required: true } // New category field
});

const AutoPart = mongoose.model('AutoPart', autoPartSchema);
module.exports = AutoPart;
