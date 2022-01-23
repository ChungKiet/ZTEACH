import React, { Component, useState, findDOMNode } from "react";
import { BrowserRouter as Router, Switch, useLocation, useNavigate} from "react-router-dom";
import Navbar from '../Navbar';
import Footer from '../Footer';
import 'bootstrap/dist/css/bootstrap.css';
import './EditPost.css';
import validate from './validateInfo';
import useForm from './useForm'
import DropUpdate from '../DropUpdate';
import GlobalVar from "../../GlobalVar";

const optionSelect = GlobalVar.optionSelect;

function EditPost() {   
    
    const location = useLocation();
    const navigate = useNavigate();
    const v = location.state.values;
    const id = {id :location.state.id};
    const dt = {...v, ...id}
    const submitForm = () => {
        console.log("Submitted");
    }
    const { handleChange, handleSubmit, values,  errors } = useForm(
        submitForm,
        validate,
        dt
    );

    return (

        <form className="new-post-page" onSubmit={handleSubmit}>
            <Navbar />


            <div className="label-dangbaitimkiemgiasu">
                <div>CHỈNH SỬA BÀI ĐĂNG</div>
            </div>

            {/* Group 1 - Class */}
            <div className="group-view-thongtin">
     
                    <div className='label-thongtin'>
                        Thông tin về lớp học
                    </div>

                <div className="flex-row">
                    {/* Subject */}
                    <DropUpdate id="id-select-subject"
                        className='text-occupation'
                        values={optionSelect.subject}
                        value={v.subject}
                        name="subject"
                        placeholder="Chọn môn học"
                        onChange={handleChange}
                    />

                    {/* Grade */}
                    <DropUpdate id="id-select-grade"
                        className='text-occupation'
                        values={optionSelect.grade}
                        value={v.grade}
                        name="grade"
                        placeholder="Chọn lớp"
                        onChange={handleChange}
                    />

                    {/* Place */}
                    <DropUpdate id="id-select-place"
                        className='text-occupation'
                        values={optionSelect.study_form}
                        value={v.study_form}
                        name="study_form"
                        placeholder="Chọn nơi học"
                        onChange={handleChange}
                    />
                </div>
                <div className="flex-row">
                    {/* DaysPerWeek */}

                    <DropUpdate id="id-select-dpw"
                        className='text-occupation'
                        values={optionSelect.lesson}
                        value={v.lessons}
                        name="lessons"
                        placeholder="Chọn số buổi/tuần"
                        onChange={handleChange}
                    />


                    {/* Duration */}
                    <DropUpdate id="id-select-duration"
                        className='text-occupation'
                        values={optionSelect.time}
                        value={v.time}
                        name="time"
                        placeholder="Chọn thời gian mỗi buổi"
                        onChange={handleChange}
                    />



                    {/* start_date */}
                    <input
                        id="duedate"
                        type="date"
                        onChange={handleChange}
                        className="text-occupation"
                        defaultValue={v.start}
                        name="start"
                        placeholder="Thời gian bắt đầu dự kiến"
                    />

                </div>
                <div className="flex-row">
                    {/* Title
                    must use defaultValue instead of value -> editable */}
                    <input
                        type='text'
                        className="class-title"
                        placeholder='Thêm tiêu đề...'
                        defaultValue={v.title}
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
                        defaultValue={v.information}
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
                    
                        <DropUpdate id="id-select-level"
                            className='text-occupation'
                            values={optionSelect.literacy}
                            value={v.literacy}
                            name="literacy"
                            placeholder="Chọn trình độ gia sư"
                            onChange={handleChange}
                        />
                    

                    {/* tutor_gender */}                    
                        <DropUpdate id="id-select-gender"
                            className='text-occupation'
                            values={optionSelect.gender}
                            value={v.gender}
                            name="gender"
                            placeholder="Chọn giới tính gia sư"
                            onChange={handleChange}
                        />                   


                    {/* salary */}
                    
                    <input id="id-salary"
                        type='text'
                        className="text-occupation"
                        placeholder='Mức lương (/buổi)'
                        defaultValue={v.fee}
                        name="fee"
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
                <button className="button-occupation-cancel" onClick={() =>{
                    navigate('/post/' + id.id);
                }}>
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