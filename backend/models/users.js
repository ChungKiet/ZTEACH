const mongoose = require('mongoose');

const User = mongoose.Schema({
    user_type: {
        type: String, required: true, default: 'student'
    },
    name: {
        type: String, required: true
    },
    gender: {
        type: String, required: true, default: 'Không có'
    },
    birth: {
        type: Date, required: true, default: '2001-01-01T00:00:00.000Z'
    },
    user_name: {
        type: String, required: true, unique: true
    },
    password: {
        type: String, required: true
    },
    address: {
        type: String, required: false, max: 255
    },
    email: {
        type: String, required: false
    },
    phone: {
        type: String, required: false
    },
    introduce: {
        type: String, required: false, max: 255
    },
    contact: {
        type: String, required: false
    },

    // Các thông tin về tài khoản gia sư 
    major:
    {
        type: String, require: false
    }, // chuyên ngành
    literacy: {
        type: String, required: false
    }, // trình độ học vấn
    fee: {
        type: Number, required: false
    }, // mức lương
    classes: {
        type: String, require: false
    } // các lớp có thể dạy


},
    {
        timestamps: true, // thời gian tạo và thời gian cập nhật
    });

module.exports = mongoose.model('User', User);
