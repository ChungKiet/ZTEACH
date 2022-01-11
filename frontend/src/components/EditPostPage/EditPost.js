import React, { Component, useState, findDOMNode } from "react";
import Navbar from '../Navbar';
import Footer from '../Footer';
import 'bootstrap/dist/css/bootstrap.css';
import './EditPost.css';
import validateInfo from './validateInfo';
import useForm from './useForm'
import Dropdown from '../Dropdown';



function EditPost() {
    const submitForm = () => {
        console.log("Submitted");
    }
    const { handleChange, handleSubmit, values, errors } = useForm(
        submitForm,
        validateInfo
    );

    const optionSelect = {
        subject: ['Toán', 'Lý', 'Hóa', 'Sinh', 'Văn', 'Sử', 'Địa', 'Anh', 'KHTN', 'KHXH'],
        grade: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        place: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8', 'Q9', 'Q10', 'Q11', 'Q12', 'Bình Chánh', 'Bình Tân', 'Bình Thạnh', 'Cần Giờ', 'Củ Chi', 'Gò Vấp', 'Hóc Môn', 'Nhà Bè', 'Phú Nhuận', 'Tân Bình', 'Tân Phú', 'Thủ Đức', 'ONLINE'],
        daysperweek: [1, 2, 3, 4, 5, 6, 7],
        duration: ['1h', '1.5h', '2h', '2.5h', '3h', '3.5h', '4h'],
        tutor_gender: ['Nam', 'Nữ', 'Khác'],
        tutor_level: ['Sinh viên', 'Giáo viên']
    }

    return (

        <form className="new-post-page" onSubmit={handleSubmit}>
            <Navbar />


            <div className="label-dangbaitimkiemgiasu">
                <div>ĐĂNG BÀI TÌM GIA SƯ</div>
            </div>

            {/* Group 1 - Class */}
            <div className="group-view-thongtin">
     
                    <div className='label-thongtin'>
                        Thông tin về lớp học
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

                    <textarea
                        className="class-detail"
                        placeholder='Thêm thông tin chi tiết...'
                        name="detail"
                        onChange={handleChange}
                        onKeyPress={(e) => { e.target.keyCode === 13 && e.preventDefault(); }}>
                    </textarea>

                </div>
            </div>


            {/* Group 2 - Tutor */}

            <div className="group-view-thongtin">
            
                    <div className='label-thongtin'>
                        Thông tin về gia sư
                    </div>
           

                <div className="flex-row">
                    {/* tutor_level */}
                    
                        <Dropdown id="id-select-level"
                            className='text-occupation'
                            values={optionSelect.tutor_level}
                            name="tutor_level"
                            placeholder="Chọn trình độ gia sư"
                            onChange={handleChange}
                        />
                    

                    {/* tutor_gender */}
                    
                        <Dropdown id="id-select-gender"
                            className='text-occupation'
                            values={optionSelect.tutor_gender}
                            name="tutor_gender"
                            placeholder="Chọn giới tính gia sư"
                            onChange={handleChange}
                        />
                    


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
                <button className="button-occupation-ok" type="submit" >
                    <div className="medium-button">
                        Cập nhật
                    </div>
                </button>
                <button className="button-occupation-cancel">
                    <div className="medium-button">
                        Hủy
                    </div>
                </button>
            </div>


            <div style={{ alignItems:"flex-end", marginTop: "1.9%", width: '100%' }}>
                <Footer />
            </div>
        </form>


    );


}



export default EditPost