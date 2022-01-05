const mongoose = require('mongoose');

const Connect = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User'
    },
    tutor: {
        type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User'
    },
    post: {
        type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Post', default: 'null'
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
