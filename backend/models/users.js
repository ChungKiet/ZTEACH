const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const User = mongoose.Schema({
    user_type: {
        type: String, required: true, default: 'Học viên'
    },
    name: {
        type: String, required: true
    },
    gender: {
        type: String, required: true, default : 'Không có'
    },
    birth: {
        type: Date, required: true, default : '2001-01-09T17:00:00.000Z'
    },
    user_name : {
        type : String, required: true, unique: true
    },
    password : {
        type : String, required: true
    },
    address: {
        type: String, required: false
    }, 
    email: {
        type: String, required: false
    }, 
    phone: {
        type: String, required: false
    },
    introduce: {
        type: String, required: false, max: 255
    }
});

module.exports = mongoose.model('User', User);
