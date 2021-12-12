const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const User = mongoose.Schema({
    name: {
        type: String, required: true
    }, 
    gender: {
        type: String, required: true, default : 'Không yêu cầu'
    }, 
    birth: {
        type: Date, required: true
    },
    user_name : {
        type : String, required: true
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
    }
});

module.exports = mongoose.model('User', User);
