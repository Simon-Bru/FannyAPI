'use strict'

const   express     = require('express'),
        app         = express(),
        mongoose    = require('mongoose'),
        Match       = require('./match');

mongoose.connect('mongodb://localhost/fanny');

app.post('/match', (req, res) => {
    let match = new Match(req.body || {});
    match.validate((err) => {
        if(err) {
            res.status(400);
            res.send('Invalid match');
            return;
        }

        match.save();

        res.status(201);
        res.send('Successfull match creation');
    });
});

app.get('/match', (req, res) => {
    Match.find({})
    .sort({ createdAt: 'desc' })
    .exec((err, matches) => {
        if(err) {
            res.status(500);
            res.send("Internal error");
            return;
        }

        res.status(200);
        res.send(matches);
    });
});

app.listen(3000, () => {
    console.log('Fanny API listening on port 3000!')
});