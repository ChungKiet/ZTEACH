const mongoose = require('mongoose');

const Image = new mongoose.Schema({
    img_type: {
        type: Number, required: true, default: 0
    },
    user: {
        type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User'
    },
    name: {
        type: String, required: true
    },
    desc: {
        type: String, required: false
    },
    img_data: {
        type: Buffer, required: true
    }
});

module.exports = new mongoose.model('Image', Image);
