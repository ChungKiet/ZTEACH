import React, { Component, useState, findDOMNode } from "react";
import Navbar from '../Navbar';
import Footer from '../Footer';
import 'bootstrap/dist/css/bootstrap.css';
import './NewPost.css';
import validate from './validateInfo';
import useForm from './useForm'
import Dropdown from '../Dropdown';



function NewPost() {
    const submitForm = () => {
        console.log("Submitted");
    }
    const { handleChange, handleSubmit, values, errors } = useForm(
        submitForm,
        validate
    );

    const optionSelect = {
        subject: ['Toán', 'Lý', 'Hóa'],
        grade: ['10', '11', '12'],
        place: ['Q1', 'Q2'],
        daysperweek: [1, 2, 3, 4],
        duration: [1, 1.5, 2],
        tutor_gender: ['Nam', 'Nữ', 'Khác'],
        tutor_level: ['Sinh viên', 'Giảng viên']
    }

    return (

        <form className="new-post-form" onSubmit={handleSubmit}>
            <Navbar />


            <div className="label-dangbaitimkiemgiasu">
                <div>ĐĂNG BÀI TÌM KIẾM GIA SƯ</div>
            </div>

            {/* Group 1 - Class */}
            <div className="group-view-thongtin">
                <div className="overlap-group">
                    <div className='label-thongtin'>
                        Thông tin về lớp học
                    </div>
                </div>
                <div className="flex-row">
                    {/* Subject */}
                    <Dropdown id="id-select-subject"
                        className='text-occupation'
                        values={optionSelect.subject}
                        name="subject"
                        placeholder="Chọn môn học"
                        onChange={handleChange}
                    />

                    {/* Grade */}
                    <Dropdown id="id-select-grade"
                        className='text-occupation'
                        values={optionSelect.grade}
                        name="grade"
                        placeholder="Chọn lớp"
                        onChange={handleChange}
                    />

                    {/* Place */}
                    <Dropdown id="id-select-place"
                        className='text-occupation'
                        values={optionSelect.place}
                        name="place"
                        placeholder="Chọn nơi học"
                        onChange={handleChange}
                    />
                </div>
                <div className="flex-row">
                    {/* DaysPerWeek */}

                    <Dropdown id="id-select-dpw"
                        className='text-occupation'
                        values={optionSelect.daysperweek}
                        name="daysperweek"
                        placeholder="Chọn số buổi/tuần"
                        onChange={handleChange}
                    />


                    {/* Duration */}
                    <Dropdown id="id-select-duration"
                        className='text-occupation'
                        values={optionSelect.duration}
                        name="duration"
                        placeholder="Chọn thời gian mỗi buổi"
                        onChange={handleChange}
                    />



                    {/* start_date */}
                    <input
                        id="duedate"
                        type="text"
                        onFocus={(e) => e.currentTarget.type = 'date'}
                        onChange={handleChange}
                        className="text-occupation"
                        name="start_date"
                        placeholder="Thời gian bắt đầu dự kiến"
                    />

                </div>
                <div className="flex-row">
                    {/* Title */}
                    <input
                        type='text'
                        className="class-title"
                        placeholder='Thêm tiêu đề...'
                        name="title"
                        onChange={handleChange}
                    >
                    </input>
                </div>
                <div className="flex-row">
                    {/* Detail */}

                    <input
                        type='textarea'
                        className="class-detail"
                        placeholder='Thêm thông tin chi tiết...'
                        name="detail"
                        onChange={handleChange}
                        onKeyPress={(e) => { e.target.keyCode === 13 && e.preventDefault(); }}>
                    </input>
                </div>
            </div>


            {/* Group 2 - Tutor */}

            <div className="group-view-thongtin">
                <div className="overlap-group">
                    <div className='label-thongtin'>
                        Thông tin về gia sư
                    </div>
                </div>

                <div className="flex-row">
                    {/* tutor_level */}
                    <div className="list-box-lop">
                        <Dropdown id="id-select-level"
                            className='text-occupation'
                            values={optionSelect.tutor_level}
                            name="tutor_level"
                            placeholder="Chọn trình độ gia sư"
                            onChange={handleChange}
                        />
                    </div>

                    {/* tutor_gender */}
                    <div >
                        <Dropdown id="id-select-gender"
                            className='text-occupation'
                            values={optionSelect.tutor_gender}
                            name="tutor_gender"
                            placeholder="Chọn giới tính gia sư"
                            onChange={handleChange}
                        />
                    </div>


                    {/* salary */}
                    <input id="id-salary"
                        type='text'
                        className="text-occupation"
                        placeholder='Mức lương (/buổi)'
                        name="salary"
                        onChange={handleChange}
                    >
                    </input>

                </div>
            </div>


            <div className="flex-row">
                <button className="button-occupation" type="submit" >
                    <h1 className="medium-button montserrat-semi-bold-white-30px">
                        Đăng
                    </h1>
                </button>
                <button className="button-occupation">
                    <h1 className="medium-button montserrat-semi-bold-white-30px">
                        Hủy
                    </h1>
                </button>
            </div>




            <div style={{ position: 'flex', marginTop: "1%", marginBottom: "0px", bottom: "0", width: '100%' }}>
                <Footer />
            </div>
        </form>


    );


}



export default NewPost