const mongoose = require('mongoose');

const User = mongoose.Schema({
    user_type: {
        type: String, required: true, default: 'student'
    },
    username: {
        type: String, required: true, unique: true
    },
    password: {
        type: String, required: true
    },
    name: {
        type: String, required: true
    },
    gender: {
        type: String, required: true
    },
    gender_secure: {
        type: String, required: true, default: 'Riêng tư'
    },
    email: {
        type: String, required: true, default: ' '
    },
    email_secure: {
        type: String, required: true, default: 'Riêng tư'
    },
    birthday: {
        type: Date, required: true, default: '2001-01-01T00:00:00.000Z'
    },
    birthday_secure: {
        type: String, required: true, default: 'Riêng tư'
    },
    address: {
        type: String, required: true, max: 255, default: ' '
    },
    address_secure: {
        type: String, required: true, default: 'Riêng tư'
    },
    contact: {
        type: String, required: true, default: ' '
    },
    contact_secure: {
        type: String, required: true, default: 'Riêng tư'
    },
    introduce: {
        type: String, required: true, max: 255, default: ' '
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
    subjects: {
        type: Array, required: false
    },
    classes: {
        type: Array, require: false
    }, // các lớp có thể dạy
    rate: {
        type: Number, required: false
    }
    // certificate: [
    //     {
    //         url: { type: String, require: false },
    //         name: { type: String, require: false },
    //     }
    // ] // văn bằng, bằng cấp
},
    {
        timestamps: true, // thời gian tạo và thời gian cập nhật
    });

module.exports = mongoose.model('User', User);
