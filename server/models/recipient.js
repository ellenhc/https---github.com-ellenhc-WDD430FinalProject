const mongoose = require('mongoose');

const recipientSchema = mongoose.Schema({
    id: { type: String, required: true },
    name: { type: String },
    address: { type: String },
    email: { type: String },
    imageUrl: { type: String }
});

module.exports = mongoose.model('Recipient', recipientSchema);