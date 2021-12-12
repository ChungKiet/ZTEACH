const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Post = mongoose.Schema({
    // id_hv: {
    //     type: String,
    //     required: true,
    //     ref: 'hoc_vien'
    // },
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
        type: String, required: true, default : 'Online'
    }, 
    gender: {
        type: String, required: true, default : 'Không yêu cầu'
    }, 
    literacy: {
        type: String, required: true, default : 'Sinh viên'
    }, // trình độ học vấn
    lessons: {
        type: Number, required: true, default : 3
    }, // số lượng buổi học
    time: {
        type: String, required: true, default : '1 giờ 30 phút'
    }  // thời lượng buổi học
},
{
    timestamps: true, // thời gian tạo và thời gian cập nhật
});

module.exports = mongoose.model('Post', Post);
