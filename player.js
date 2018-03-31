'use strict'

const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    name:       { type: String, required: true },
    score:      { type: Number, required: true },
    beerNb:     { type: Number, default: 0 },
    gammelleNb: { type: Number, default: 0 },
    cendarNb:   { type: Number, default: 0 },
    pissetteNb: { type: Number, default: 0 }
}, 
{ minimize: false, timestamps: false });

const Player = mongoose.model('Player', PlayerSchema);
module.exports = Player;
