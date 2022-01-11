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



function Post() {
    const URL = window.location.pathname;
    const tmp = URL.split('/');
    const id = tmp[tmp.length - 1];
    const [values, setValues] = useState({
        subject: "Hóa học",
        grade: "Lớp 8",
        study_form: "Quận 5",
        lessons: "3",
        time: "2h",
        start: "01-01-2021",
        title: "Default title",
        information: "Cần tìm gia sư dạy giỏi môn hóa, lương cao",
        literacy: "Sinh viên",
        gender: "Nữ",
        fee: "300000",
        request: "2",
        user: "123234345123",

        own_username: "admin",
        own_user_id: "u1709",
        is_connected: "0",
        is_requested: "0"
    });
    console.log('http://localhost:8000/posts/' + id);


    useEffect(() => {
        const fetchData = async () => {
            const result = await axios('http://localhost:8000/posts/' + id);
            const dt = result.data;
            setValues({
                title: dt.title,
                information: dt.information,
                subject: dt.subject,
                grade: dt.grade,
                study_form: dt.study_form,
                start: dt.start,
                literacy: dt.literacy,
                gender: dt.gender,
                fee: dt.fee,
                request: dt.request,
                lessons: dt.lessons,
                time: dt.time,
                user: dt.user,

                //own_username: dt.own_username,
                //own_user_id: dt.own_user_id,
                is_connected: "0",
                is_requested: "0"
            });
        };
        fetchData();


    }, []);
    console.log(values);

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    function RenderButton() {
        if (values.is_connected === "1")
            return (
                <button className="button-connected">
                    <div className="button-connect-text">
                        Đã kết nối
                    </div>
                </button>
            )
        else if (values.is_requested === "0") {
            return (
                <button className="button-connect">
                    <div className="button-connect-text">
                        Kết nối
                    </div>
                </button>
            );
        }
        else {
            return (
                <button className="button-requested">
                    <div className="button-connect-text">
                        Đã yêu cầu
                    </div>
                </button>
            );
        }
    }

    function RenderRequestList() {
        const cookie = JSON.parse(window.sessionStorage.getItem("user19120000"));
        console.log("_id = ");
        console.log(cookie._id);
        const currentUserID = cookie._id;
        if (currentUserID === values.user)
            return (
                <div>
                <div className="more-detail-label">Danh sách gia sư yêu cầu kết nối:</div>

            <div className="overlap-group-requests">
                <div className="box-outline-735"></div>
                <div className="flex-request-heads">
                    <div className="request-no-735">STT</div>
                    <div className="request-username-735">Tên tài khoản</div>
                    <div className="request-level-735">Trình độ</div>
                    <div className="request-gender-735">Giới tính</div>
                </div>
                <div className="request-list-735">
                    <RequestSummaryLine order="1" username="ThuyKhueChemist94" level="Giáo viên" gender="Nữ"></RequestSummaryLine>
                    <RequestSummaryLine order="2" username="HoaiHuongPro" level="Sinh viên" gender="Nữ"></RequestSummaryLine>
                    <RequestSummaryLine order="3" username="TrucRapper" level="Giáo viên" gender="Nam"></RequestSummaryLine>
                    <RequestSummaryLine order={1 + 3} username="AnhThanhNien" level="Giáo viên" gender="Nữ"></RequestSummaryLine>

                </div>
            </div>
            </div>)
        else{
            return(<div/>);
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
                            <a href={`http://localhost:3000/users/${values.user}`} style={{ 'text-decoration': 'none' }}>{values.user}</a>
                        </div>
                    </div>
                </div>
                <RenderButton />
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
                                {values.study_form}
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
                                {values.start.split('T')[0]}
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
                                {values.literacy}
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
                                {values.gender}
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
                                {values.fee}đ/tháng
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
                                {values.request} yêu cầu
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
                    {values.lessons} buổi/tuần x {values.time}/buổi
                </div>
            </div>


            <div className="more-detail-label">Thông tin thêm về lớp học:</div>

            <div className="overlap-group-more-info">
                <div className="box-outline-735"></div>
                <div className="detail-script">{values.information}</div>
            </div>




            <RenderRequestList/>



            <div style={{ position: 'relative', marginTop: "2%", marginBottom: "0px", bottom: "0", width: '100%' }}>
                <Footer />
            </div>
        </div>


    );
}


function RequestSummaryLine(props) {
    const { order, username, level, gender } = props;

    return (
        <div className="flex-request-line">
            <div className="request-no-735">{order}</div>
            <div className="request-username-735">
                <a href={`http://localhost:3000/user?id=${username}`} style={{ 'text-decoration': 'none' }}>{username}</a>
            </div>
            <div className="request-level-735">{level}</div>
            <div className="request-gender-735">{gender}</div>
            <div className="request-accept-735">
                <button className="button-request-accept-735" type="submit" >
                    <div className="request-button-735">
                        Chấp nhận
                    </div>
                </button>
            </div>
            <div className="request-deny-735">
                <button className="button-request-deny-735" type="submit" >
                    <div className="request-button-735">
                        Từ chối
                    </div>
                </button>
            </div>
        </div>
    );
}

export default Post