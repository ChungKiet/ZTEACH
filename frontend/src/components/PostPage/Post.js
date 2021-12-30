import React, { Component, useState, findDOMNode } from "react";
import { Form, Button } from 'react-bootstrap';
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


var ReactDOM = require('react-dom');

class Post extends Component {
    state = {
        subject: "",
        grade: "",
        place: "",
        daysperweek: "",
        duration: "",
        start_date: "",
        title: "",
        detail: "",
        tutor_level: "",
        tutor_gender: "",
        salary: ""
    };



    render() {

        return (
            <div className="Post">
                <Navbar />


                <div className="overlap-group-container">
                    <div className="overlap-group1">
                        <div className="title-occupation">Tìm gia sư dạy hóa lớp 8</div>
                    </div>


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
                                    Hóa học
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
                                    Lớp 8
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
                                    Hình thức học
                                </div>
                            </div>
                            <div className="placeholder-text-1">
                                <div className="select-occupation-1">
                                    Quận 5
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
                                    01-01-2021
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
                                    Sinh viên
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
                                    Nữ
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
                                    3000000
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
                                    2 yêu cầu
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
                        3 buổi/tuần x 2h/buổi
                    </div>
                </div>


                <div className="more-detail-label">Thông tin thêm về lớp học</div>

                <div className="detail-script">Tôi rất muốn đi học</div>


                <div style={{ position: 'fixed', marginBottom: "0px", bottom: "0", width: '100%' }}>
                    <Footer />
                </div>
            </div>


        );

    }


}

export default Post