const mongoose = require('mongoose');

const sequenceSchema = mongoose.Schema({
    maxGiftId: { type: Number },
    maxRecipientId: { type: Number }
});

module.exports = mongoose.model('Sequence', sequenceSchema);