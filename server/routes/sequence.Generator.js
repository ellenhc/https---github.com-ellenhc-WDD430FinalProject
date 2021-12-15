var Sequence = require('../models/sequence');

var maxGiftId;
var maxRecipientId;
var sequenceId = null;

function SequenceGenerator() {

    Sequence.findOne()
        .exec(function (err, sequence) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }

            sequenceId = sequence._id;
            maxGiftId = sequence.maxGiftId;
            maxRecipientId = sequence.maxRecipientId;
        });
}

SequenceGenerator.prototype.nextId = function (collectionType) {

    var updateObject = {};
    var nextId;

    switch (collectionType) {
        case 'gifts':
            maxGiftId++;
            updateObject = { maxGiftId: maxGiftId };
            nextId = maxGiftId;
            break;
        case 'recipients':
            maxRecipientId++;
            updateObject = { maxRecipientId: maxRecipientId };
            nextId = maxRecipientId;
            break;
        default:
            return -1;
    }

    Sequence.update({ _id: sequenceId }, { $set: updateObject },
        function (err) {
            if (err) {
                console.log("nextId error = " + err);
                return null
            }
        });

    return nextId;
}

module.exports = new SequenceGenerator();