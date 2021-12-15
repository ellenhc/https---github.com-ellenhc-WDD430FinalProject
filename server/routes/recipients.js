var express = require('express');
const sequenceGenerator = require('./sequence.Generator');
const Recipient = require('../models/recipient');

var router = express.Router();

// Get list of recipients
router.get('/', (req, res, next) => {
    Recipient.find()
        .then(recipients => {
            res.status(200).json({
                message: 'Retrieved recipients successfully',
                recipients: recipients
            });
        })
        .catch(error => {
            res.status(500).json({
                message: 'An error occurred',
                error: error
            });
        });
});

// Create new recipients
router.post('/', (req, res, next) => {
    console.log(req);
    const maxRecipientId = sequenceGenerator.nextId("recipients");
    const recipient = new Recipient({
        id: maxRecipientId,
        name: req.body.name,
        address: req.body.address,
        email: req.body.email,
        imageUrl: req.body.imageUrl
    });
    recipient.save()
        .then(createdRecipient => {
            res.status(201).json({
                message: 'Recipient added successfully',
                recipient: createdRecipient
            });
        })
        .catch(error => {
            res.status(500).json({
                message: 'An error occurred',
                error: error
            });
        });
});

// Update existing recipient
router.put('/:id', (req, res, next) => {
    Recipient.findOne({ id: req.params.id })
        .then(recipient => {
            recipient.name = req.body.name;
            recipient.address = req.body.address;
            recipient.email = req.body.email;
            recipient.imageUrl = req.body.imageUrl;

            Recipient.updateOne({ id: req.params.id }, recipient)
                .then(result => {
                    res.status(204).json({
                        message: 'Recipient updated successfully'
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
                message: 'Recipient not found.',
                error: { recipient: 'Recipient not found' }
            });
        });
});

// Delete recipient
router.delete('/:id', (req, res, next) => {
    Recipient.findOne({ id: req.params.id })
        .then(recipient => {
            Recipient.deleteOne({ id: req.params.id })
                .then(result => {
                    res.status(204).json({
                        message: 'Recipient deleted successfully'
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
                message: 'Recipient not found.',
                error: { recipient: 'Recipient not found' }
            });
        });
});

module.exports = router; 