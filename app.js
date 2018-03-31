'use strict'

const   express     = require('express'),
        app         = express(),
        bodyParser  = require('body-parser'),
        mongoose    = require('mongoose'),
        Match       = require('./match');

mongoose.connect('mongodb://api:fanny123@ds229909.mlab.com:29909/fanny');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/match', (req, res) => {
    let match = new Match(req.body || {});
    match.validate((err) => {
        if(err) {
            console.error(err);
            res.status(400);
            res.send('Invalid match');
            return;
        }

        match.save();

        res.status(201);
        res.send('Successfull match creation');
        return;
    });
});

app.get('/match/:deviceId', (req, res) => {
    Match.find({ device: req.params.deviceId })
    .sort({ createdAt: 'desc' })
    .exec((err, matches) => {
        if(err) {
            console.error(err);
            res.status(500);
            res.send("Internal error");
            return;
        }

        res.status(200);
        res.send(matches);
        return;
    });
});

app.listen(3000, () => {
    console.log('Fanny API listening on port 3000!');
});