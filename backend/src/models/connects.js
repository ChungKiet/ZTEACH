const mongoose = require('mongoose');

const Connect = mongoose.Schema({
    user: {
        type: String, required: true
    },
    tutor: {
        type: String, required: true
    },
    post: {
        type: String, required: true, default: 'null'
    },
    accept: {
        type: Boolean, require: true, default: false
    },
    timer: {
        type: Date, required: true, default: Date.now()
    },
    timea: {
        type: Date, required: false
    },
    rate: {
        type: Number, required: false
    }
});

module.exports = mongoose.model('Connect', Connect);
