var express = require('express');
const sequenceGenerator = require('./sequence.Generator');
const Gift = require('../models/gift');

var router = express.Router();

// Get list of gifts
router.get('/', (req, res, next) => {
    Gift.find()
        .then(gifts => {
            res.status(200).json({
                message: 'Retrieved gifts successfully',
                gifts: gifts
            });
        })
        .catch(error => {
            res.status(500).json({
                message: 'An error occurred',
                error: error
            });
        });
});

// Create new gift
router.post('/', (req, res, next) => {
    console.log(req);
    const maxGiftId = sequenceGenerator.nextId("gifts");
    const gift = new Gift({
        id: maxGiftId,
        name: req.body.name,
        price: req.body.price,
        retailer: req.body.retailer,
        url: req.body.url,
        recipient: req.body.recipient,
        imageUrl: req.body.imageUrl
    });
    gift.save()
        .then(createdGift => {
            res.status(201).json({
                message: 'Gift added successfully',
                gift: createdGift
            });
        })
        .catch(error => {
            res.status(500).json({
                message: 'An error occurred',
                error: error
            });
        });
});

// Update existing gift
router.put('/:id', (req, res, next) => {
    Gift.findOne({ id: req.params.id })
        .then(gift => {
            gift.name = req.body.name;
            gift.price = req.body.price;
            gift.retailer = req.body.retailer;
            gift.url = req.body.url;
            gift.recipient = req.body.recipient;
            gift.imageUrl = req.body.imageUrl;

            Gift.updateOne({ id: req.params.id }, gift)
                .then(result => {
                    res.status(204).json({
                        message: 'Gift updated successfully'
                    })
                })
                .catch(error => {
                    res.status(500).json({
                        message: 'An error occurred',
                        error: error
                    });
                });
        })
        .catch(error => {
            res.status(500).json({
                message: 'Gift not found.',
                error: { gift: 'Gift not found' }
            });
        });
});

// Delete gift
router.delete('/:id', (req, res, next) => {
    Gift.findOne({ id: req.params.id })
        .then(gift => {
            Gift.deleteOne({ id: req.params.id })
                .then(result => {
                    res.status(204).json({
                        message: 'Gift deleted successfully'
                    });
                })
                .catch(error => {
                    res.status(500).json({
                        message: 'An error occurred',
                        error: error
                    });
                })
        })
        .catch(error => {
            res.status(500).json({
                message: 'Gift not found.',
                error: { gift: 'Gift not found' }
            });
        });
});

module.exports = router;