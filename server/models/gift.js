const mongoose = require('mongoose');

const giftSchema = mongoose.Schema({
    id: { type: String, required: true },
    name: { type: String },
    price: { type: String },
    retailer: { type: String },
    url: { type: String },
    recipient: { type: mongoose.Schema.Types.String, ref: 'Recipient' },
    imageUrl: { type: String }
});

module.exports = mongoose.model('Gift', giftSchema);