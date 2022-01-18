const mongoose = require('mongoose');

const User = mongoose.Schema({
    user_type: {
        type: String, required: true, default: 'student'
    },
    image: {
        type: String, require: true, default: 'https://firebasestorage.googleapis.com/v0/b/zteach-images.appspot.com/o/images%2Fprofile.png?alt=media&token=34e94b8d-cda6-4df8-8f4b-88a022d3b3fe'
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
        type: Array, of: String, required: false
    },
    classes: {
        type: Array, of: String, require: false
    }, // các lớp có thể dạy
    rate: {
        type: Number, required: false
    },
    certificate: {
        type: Array, of: String, require: false
    } // văn bằng, bằng cấp
},
    {
        timestamps: true, // thời gian tạo và thời gian cập nhật
    });

module.exports = mongoose.model('User', User);
