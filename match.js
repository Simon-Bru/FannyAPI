'use strict'

const mongoose = require('mongoose'),
        Player = require('./player');

const MatchSchema = new mongoose.Schema({
    id:         { type: Number, required: true },
    player1:      Player.schema,
    player2:      Player.schema,
    fanny:      { type: Boolean },
    imgPath:    { type: String },
    longitude:  { type: Number },
    latitude:   { type: Number }
}, 
{ minimize: false, timestamps: true });

const Match = mongoose.model('Match', MatchSchema);
module.exports = Match;
