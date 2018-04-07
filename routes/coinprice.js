const models = require("../Models");    // Models
const Price = models.price;   // accessing price model definition file

const Ethereum = models.ethereum;
const Lite = models.lite;
const Digibyte = models.digibyte;
const Dash = models.dash;
const Ripple = models.ripple;

const express = require('express');
const router = express.Router();

module.exports.construct = () => {
    router.get('/getprediction', (req, res) => {
        Price.findOne({
                order: [
                    ['id', 'DESC']
                ],
                attributes: ['actualClose', 'predictedClose']
            }).then(price => {
                if(!price) {
                    res.json({ success: false, message: 'Nothing found' });
                } else {
                    res.json({ success: true, message: 'Price found!', prices: price });
                }
        });
    });

    // Ethereum Route
    router.get('/ethereum', (req, res) => {
        Ethereum.findOne({
                order: [
                    ['id', 'DESC']
                ],
                attributes: ['actualClose', 'predictedClose']
            }).then(price => {
                if(!price) {
                    res.json({ success: false, message: 'Nothing found' });
                } else {
                    res.json({ success: true, message: 'Price found!', prices: price });
                }
        });
    });

    // Lite Route
    router.get('/lite', (req, res) => {
        Lite.findOne({
                order: [
                    ['id', 'DESC']
                ],
                attributes: ['actualClose', 'predictedClose']
            }).then(price => {
                if(!price) {
                    res.json({ success: false, message: 'Nothing found' });
                } else {
                    res.json({ success: true, message: 'Price found!', prices: price });
                }
        });
    });

    // Digibyte Route
    router.get('/digibyte', (req, res) => {
        Digibyte.findOne({
                order: [
                    ['id', 'DESC']
                ],
                attributes: ['actualClose', 'predictedClose']
            }).then(price => {
                if(!price) {
                    res.json({ success: false, message: 'Nothing found' });
                } else {
                    res.json({ success: true, message: 'Price found!', prices: price });
                }
        });
    });

    // Dash Route
    router.get('/dash', (req, res) => {
        Dash.findOne({
                order: [
                    ['id', 'DESC']
                ],
                attributes: ['actualClose', 'predictedClose']
            }).then(price => {
                if(!price) {
                    res.json({ success: false, message: 'Nothing found' });
                } else {
                    res.json({ success: true, message: 'Price found!', prices: price });
                }
        });
    });

    // Ripple Route
    router.get('/ripple', (req, res) => {
        Ripple.findOne({
                order: [
                    ['id', 'DESC']
                ],
                attributes: ['actualClose', 'predictedClose']
            }).then(price => {
                if(!price) {
                    res.json({ success: false, message: 'Nothing found' });
                } else {
                    res.json({ success: true, message: 'Price found!', prices: price });
                }
        });
    });



}

module.exports.router = router; 