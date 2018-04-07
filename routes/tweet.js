const models = require("../Models");    // Models

const EthereumTweet = models.ethereumtweet;
const LiteTweet = models.litetweet;
const DigibyteTweet = models.digibytetweet;
const DashTweet = models.dashtweet;
const RippleTweet = models.rippletweet;

const express = require('express');
const router = express.Router();

module.exports.construct = () => {

    // Ethereum Route
    router.get('/ethereum', (req, res) => {
        EthereumTweet.findOne({
                order: [
                    ['id', 'DESC']
                ],
                attributes: ['polarity', 'timestamp']
            }).then(polarity => {
                if(!polarity) {
                    res.json({ success: false, message: 'Nothing found' });
                } else {
                    res.json({ success: true, message: 'Polarity found!', polarity: polarity });
                }
        });
    });

    // Lite Route
    router.get('/lite', (req, res) => {
        LiteTweet.findOne({
                order: [
                    ['id', 'DESC']
                ],
                attributes: ['polarity', 'timestamp']
            }).then(polarity => {
                if(!polarity) {
                    res.json({ success: false, message: 'Nothing found' });
                } else {
                    res.json({ success: true, message: 'Polarity found!', polarity: polarity });
                }
        });
    });

    // Digibyte Route
    router.get('/digibyte', (req, res) => {
        DigibyteTweet.findOne({
                order: [
                    ['id', 'DESC']
                ],
                attributes: ['polarity', 'timestamp']
            }).then(polarity => {
                if(!polarity) {
                    res.json({ success: false, message: 'Nothing found' });
                } else {
                    res.json({ success: true, message: 'Polarity found!', polarity: polarity });
                }
        });
    });

    // Dash Route
    router.get('/dash', (req, res) => {
        DashTweet.findOne({
                order: [
                    ['id', 'DESC']
                ],
                attributes: ['polarity', 'timestamp']
            }).then(polarity => {
                if(!polarity) {
                    res.json({ success: false, message: 'Nothing found' });
                } else {
                    res.json({ success: true, message: 'Polarity found!', polarity: polarity });
                }
        });
    });

    // Ripple Route
    router.get('/ripple', (req, res) => {
        RippleTweet.findOne({
                order: [
                    ['id', 'DESC']
                ],
                attributes: ['polarity', 'timestamp']
            }).then(polarity => {
                if(!polarity) {
                    res.json({ success: false, message: 'Nothing found' });
                } else {
                    res.json({ success: true, message: 'Polarity found!', polarity: polarity });
                }
        });
    });

}

module.exports.router = router; 