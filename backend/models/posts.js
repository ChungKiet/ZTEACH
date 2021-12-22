const mongoose = require('mongoose');

const Post = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User'
    },
    title: {
        type: String, required: true
    },
    information: {
        type: String
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
        type: Number, required: true, default: 90
    },  // thời lượng buổi học

    connect_count: {
        type: Number, required: true, default: 0
    },

    connect: [
        {
            tutor: {
                type: mongoose.Schema.Types.ObjectId, required: false, unique: true, ref: 'User'
            },
            timec: {
                type: Date, required: false
            },
            _id: {
                type: mongoose.Schema.Types.ObjectId, required: false
            }
        }
    ]
},
    {
        timestamps: true, // thời gian tạo và thời gian cập nhật
    });

module.exports = mongoose.model('Post', Post);
