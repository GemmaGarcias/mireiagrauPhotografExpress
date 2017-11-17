const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SessionSchema = new Schema({
    name: String,
    detail: String,
    img:[{url: String, name: String}],
    gallery: String,
    date: String
})

module.exports = mongoose.model('Session', SessionSchema)