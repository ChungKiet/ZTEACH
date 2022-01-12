const mongoose = require('mongoose');

const Post = mongoose.Schema({
    username: {
        type: String, required: true
    },
    title: {
        type: String, required: true
    },
    information: {
        type: String, max: 500
    },
    subject: {
        type: String, required: true
    },
    grade: {
        type: Number, required: true
    },
    fee: {
        type: Number, required: true
    },
    study_form: {
        type: String, required: true, default: 'Online'
    },
    gender: {
        type: String, required: true, default: 'Không yêu cầu'
    },
    literacy: {
        type: String, required: true, default: 'Sinh viên'
    }, // trình độ học vấn
    lessons: {
        type: Number, required: true, default: 3
    }, // số lượng buổi học
    time: {
        type: String, required: true, default: "1 giờ"
    },  // thời lượng buổi học
    start: {
        type: Date, required: true
    }, // thời gian bắt đầu (dự kiến)
    request: {
        type: Number, required: true, default: 0
    } // Số lượng yêu cầu kết nối
},
    {
        timestamps: true, // thời gian tạo và thời gian cập nhật
    });

module.exports = mongoose.model('Post', Post);
