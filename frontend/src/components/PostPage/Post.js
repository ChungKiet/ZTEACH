import React, { useState, useEffect } from "react";
import Navbar from '../Navbar';
import Footer from '../Footer';
import 'bootstrap/dist/css/bootstrap.css';

import img_connected from '../images/postimg/connected.png';
import img_date from '../images/postimg/date.png';
import img_fee from '../images/postimg/fee.png';
import img_gender from '../images/postimg/gender.png';
import img_grade from '../images/postimg/grade.png';
import img_level from '../images/postimg/level.png';
import img_place from '../images/postimg/place.png';
import img_subject from '../images/postimg/subject.png';
import img_tutor from '../images/postimg/tutor.png';

import './Post.css';


import axios from "axios";
import { map } from "jquery";


function Post() {
    const [values, setValues] = useState({
        subject: "Hóa học",
        grade: "Lớp 8",
        place: "Quận 5",
        daysperweek: "3",
        duration: "2h",
        start_date: "01-01-2021",
        title: "Default title",
        detail: "Cần tìm gia sư dạy giỏi môn hóa, lương cao",
        tutor_level: "Sinh viên",
        tutor_gender: "Nữ",
        salary: "300000",
        connected: "2",

        own_username: "admin",
        own_user_id: "u1709",
        is_connected: "0",
        is_requested: "0"
    });


    useEffect(() => {
        const fetchData = async() => {
            const result = await axios('http://localhost:8000/post');
            const dt = result.data;
            setValues({
                title : dt.title, 
                detail: dt.detail,
                subject: dt.subject,
                grade: dt.grade,
                place: dt.place,
                start_date: dt.start_date,
                tutor_level: dt.tutor_level,
                tutor_gender: dt.tutor_gender,
                salary: dt.salary,
                connected: dt.connected,
                daysperweek: dt.daysperweek,
                duration: dt.duration,

                own_username: dt.own_username,
                own_user_id: dt.own_user_id,
                is_connected: dt.is_connected,
                is_requested: dt.is_requested

            });
        };
        fetchData();
        
    }, []);
    
    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
          ...values,
          [name]: value
        });
    };

    function RenderButton(props){
        const is_connected = props.is_connected;
        const is_requested = props.is_requested;
        if (is_connected === "1")
            return(
                <button className="button-connected">
                    <div className="button-connect-text">
                        Đã kết nối
                    </div>
                </button>
            )
        else if(is_requested === "0"){
            return(
                <button className="button-connect">
                    <div className="button-connect-text">
                        Kết nối
                    </div>
                </button>
            );
        }
        else{
            return(
                <button className="button-requested">
                    <div className="button-connect-text">
                        Đã yêu cầu
                    </div>
                </button>
            );
        }

    }




    return (
        <div className="Post">
            <Navbar />

            <div className="frame-general">
                <div className="title-container-head">

                    <div className="placeholder-title-head">
                        <div className="text-title-head">
                            {values.title}
                        </div>
                    </div>
                </div>
                <div className="overlap-group-user">
                    <div className="box-user-head"></div>
                    <div className="flex-user">
                        <div>
                            <img className="user-img-head" src={img_tutor} />
                        </div>
                        <div className="text-username">
                            <a href={`http://localhost:3000/user?id=${values.own_user_id}`} style={{ 'text-decoration': 'none' }}>{values.own_username}</a>
                        </div>
                    </div>
                </div>
                <RenderButton is_connected={values.is_connected} is_requested={values.is_requested}/>
            </div>




            {/* flex row */}
            <div className="flex-row">

                {/* Subject */}
                <div className="img-label-detail">
                    <img className="img-post" src={img_subject} />
                    <div className="placeholder-text-container">
                        <div className="placeholder-text">
                            <div className="select-occupation">
                                Môn học
                            </div>
                        </div>
                        <div className="placeholder-text-1">
                            <div className="select-occupation-1">
                                {values.subject}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Grade */}
                <div className="img-label-detail">
                    <img className="img-post" src={img_grade} />
                    <div className="placeholder-text-container">
                        <div className="placeholder-text">
                            <div className="select-occupation">
                                Khối lớp
                            </div>
                        </div>
                        <div className="placeholder-text-1">
                            <div className="select-occupation-1">
                                {values.grade}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Place */}
                <div className="img-label-detail">
                    <img className="img-post" src={img_place} />
                    <div className="placeholder-text-container">
                        <div className="placeholder-text">
                            <div className="select-occupation">
                                Địa điểm học
                            </div>
                        </div>
                        <div className="placeholder-text-1">
                            <div className="select-occupation-1">
                                {values.place}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Place */}
                <div className="img-label-detail">
                    <img className="img-post" src={img_date} />
                    <div className="placeholder-text-container">
                        <div className="placeholder-text">
                            <div className="select-occupation">
                                Ngày học dự kiến
                            </div>
                        </div>
                        <div className="placeholder-text-1">
                            <div className="select-occupation-1">
                                {values.start_date}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* flex rows 2*/}
            <div className="flex-row">
                {/* Level */}
                <div className="img-label-detail">
                    <img className="img-post" src={img_level} />
                    <div className="placeholder-text-container">
                        <div className="placeholder-text">
                            <div className="select-occupation">
                                Trình độ gia sư
                            </div>
                        </div>
                        <div className="placeholder-text-1">
                            <div className="select-occupation-1">
                                {values.tutor_level}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Gender */}
                <div className="img-label-detail">
                    <img className="img-post" src={img_gender} />
                    <div className="placeholder-text-container">
                        <div className="placeholder-text">
                            <div className="select-occupation">
                                Giới tính
                            </div>
                        </div>
                        <div className="placeholder-text-1">
                            <div className="select-occupation-1">
                                {values.tutor_gender}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Fee */}
                <div className="img-label-detail">
                    <img className="img-post" src={img_fee} />
                    <div className="placeholder-text-container">
                        <div className="placeholder-text">
                            <div className="select-occupation">
                                Học phí
                            </div>
                        </div>
                        <div className="placeholder-text-1">
                            <div className="select-occupation-1">
                                {values.salary}đ/buổi
                            </div>
                        </div>
                    </div>
                </div>

                {/* Connected */}
                <div className="img-label-detail">
                    <img className="img-post" src={img_connected} />
                    <div className="placeholder-text-container">
                        <div className="placeholder-text">
                            <div className="select-occupation">
                                Kết nối
                            </div>
                        </div>
                        <div className="placeholder-text-1">
                            <div className="select-occupation-1">
                                {values.connected} yêu cầu
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex-row">
                <div className="duration-label">
                    Thời lượng học:
                </div>
                <div className="duration">
                    {values.daysperweek} buổi/tuần x {values.duration}/buổi
                </div>
            </div>


            <div className="more-detail-label">Thông tin thêm về lớp học</div>

            <div className="overlap-group-more-info">
                <div className="box-more-info"></div>
                <div className="detail-script">{values.detail}</div>
            </div>


            <div style={{ position: 'fixed', marginBottom: "0px", bottom: "0", width: '100%' }}>
                <Footer />
            </div>
        </div>


    );
}

export default Post