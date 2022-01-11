import React, { Component, useState, findDOMNode } from "react";
import Navbar from '../Navbar';
import Footer from '../Footer';
import 'bootstrap/dist/css/bootstrap.css';
import './NewPost.css';
import validate from './validateInfo';
import useForm from './useForm'
import Dropdown from '../Dropdown';
import GlobalVar from "../../GlobalVar";

const optionSelect = GlobalVar.optionSelect;

function NewPost() {
    const submitForm = () => {
        console.log("Submitted");
    }
    const { handleChange, handleSubmit, values, errors } = useForm(
        submitForm,
        validate
    );

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
                        values={optionSelect.study_form}
                        name="study_form"
                        placeholder="Chọn nơi học"
                        onChange={handleChange}
                    />
                </div>
                <div className="flex-row">
                    {/* DaysPerWeek */}

                    <Dropdown id="id-select-dpw"
                        className='text-occupation'
                        values={optionSelect.lesson}
                        name="lessons"
                        placeholder="Chọn số buổi/tuần"
                        onChange={handleChange}
                    />


                    {/* Duration */}
                    <Dropdown id="id-select-duration"
                        className='text-occupation'
                        values={optionSelect.time}
                        name="time"
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
                        name="start"
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
                        name="information"
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
                            values={optionSelect.literacy}
                            name="literacy"
                            placeholder="Chọn trình độ gia sư"
                            onChange={handleChange}
                        />
                    

                    {/* tutor_gender */}                    
                        <Dropdown id="id-select-gender"
                            className='text-occupation'
                            values={optionSelect.gender}
                            name="gender"
                            placeholder="Chọn giới tính gia sư"
                            onChange={handleChange}
                        />                   


                    {/* salary */}
                    
                    <input id="id-salary"
                        type='text'
                        className="text-occupation"
                        placeholder='Mức lương (/buổi)'
                        name="fee"
                        onChange={handleChange}
                    >
                    </input>

                </div>
            </div>


            <div className="flex-row">
                <button className="button-occupation-ok" type="submit" >
                    <div className="medium-button">
                        Đăng
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



export default NewPost