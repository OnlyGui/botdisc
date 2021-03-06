const mongoose = require('../database/db')

const UserSchema = new mongoose.Schema({
    discord: {
        type: String,
        require: true
    },
    nick: {
        type: String,
        require: true
    },
    twitch: {
        type: String,
        require: true
    },
    win: {
        type: Number,
        default: 0
    },
    lose: {
        type: Number,
        default: 0
    },
    wo: {
        type: Number,
        default: 0
    },
    mmr: {
        type: Number,
        default: 0
    }

});

const User = mongoose.model('User', UserSchema)

module.exports = User;