const mongoose = require('mongoose');

const Connect = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User'
    },
    tutor: {
        type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User'
    },
    timec: {
        type: Date, required: true, default: Date.now()
    },
    rate: {
        type: Number, required: true
    }
});

module.exports = mongoose.model('Connect', Connect);
