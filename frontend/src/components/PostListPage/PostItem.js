import React, { useState, useEffect } from "react";
import './PostItem.css';
import 'bootstrap/dist/css/bootstrap.css';

import img_fee from '../images/postimg/fee.png';
import img_gender from '../images/postimg/gender.png';
import img_grade from '../images/postimg/grade.png';
import img_level from '../images/postimg/level.png';
import img_place from '../images/postimg/place.png';
import img_subject from '../images/postimg/subject.png';
import img_avata_user from '../images/profile.png';

import './PostItem.css';

import axios from "axios";


function PostItem(params) {
    const [values, setValues] = useState({
        title: "Default title",
        subject: "Hóa học",
        grade: "Lớp 8",
        place: "Quận 5",
        tutor_level: "Sinh viên",
        tutor_gender: "Nữ",
        salary: "300000",

        username: "username",
        own_username: "username",
        own_user_id: "tm1606",
        is_connected: "0",
        is_requested: "0"
    });

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios('http://localhost:8000/posts');
            const dt = result.data;
            setValues({
                title: dt.title,
                subject: dt.subject,
                grade: dt.grade,
                place: dt.place,
                tutor_level: dt.tutor_level,
                tutor_gender: dt.tutor_gender,
                salary: dt.salary,

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



    return (
        <div className="post-item-frame40">
            <div className="post-item-grid-title40">
                <div className="group-user-grid40">
                    <div>
                        <img className="user-img-post-item40" src={img_avata_user} />
                    </div>
                    <div class="username-post-item40">
                        {values.own_username}
                    </div>
                </div>
                <div class="title-post-item40">
                    {values.title}
                </div>
            </div>




            {/* flex row */}
            <div className="grid-2x3-subitem40">

                {/* Subject */}
                <div className="img-label-detail40">
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
                <div className="img-label-detail40">
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
                <div className="img-label-detail40">
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

                {/* Level */}
                <div className="img-label-detail40">
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
                <div className="img-label-detail40">
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
                <div className="img-label-detail40">
                    <img className="img-post" src={img_fee} />
                    <div className="placeholder-text-container">
                        <div className="placeholder-text">
                            <div className="select-occupation">
                                Học phí (VNĐ/buổi)
                            </div>
                        </div>
                        <div className="placeholder-text-1">
                            <div className="select-occupation-1">
                                {values.salary}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default PostItem;