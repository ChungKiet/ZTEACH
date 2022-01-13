import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
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
        username: "",
        image: "",
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
        is_connected: "0",
        is_requested: "0"
    });


    useEffect(() => {
        const fetchData = async () => {
            await axios('http://localhost:8000/posts/' + id).then(
                res => {
                    const dt = res.data;
                    setValues({
                        username: dt.username,
                        image: dt.image,
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
                        is_connected: "0",
                        is_requested: "0"                       
                    });
                }
            )
        }


        fetchData();
    }, []);

    useEffect(() => {
        const fetchData2 = async () => {
            const result = await axios.post('http://localhost:8000/users/profile', { username: values.username });
            console.log(result);
            const dt = result.data;
            setValues({
                image: dt.image_prof
            });
        };
        fetchData2();
    }, []);


    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    function UserTag() {
        const cookie = JSON.parse(window.sessionStorage.getItem("user19120000"));
        const currentUser = cookie.username;
        if (currentUser !== values.username)
            return (
                <div className="overlap-group-user">
                    <div className="box-user-head"></div>
                    <div className="flex-user">
                        <div>
                            <img className="user-img-head" src={values.image} alt={values.username} />
                        </div>
                        <div className="text-username">
                            <a href={`http://localhost:3000/users/${values.username}`} style={{ 'textDecoration': 'none' }}>{values.username}</a>
                        </div>
                    </div>
                </div>
            )
        else
            return (
                <div className="overlap-group-user">
                    <div className="box-user-own"></div>
                    <div className="flex-user">
                        <div className="text-username-own">Bạn là chủ bài đăng</div>
                    </div>
                </div>
            );


    }

    function ButtonConnect() {
        const cookie = JSON.parse(window.sessionStorage.getItem("user19120000"));
        const currentUser = cookie.username;
        if (currentUser === values.username) {
            return (
                <div />
            )
        }
        else if (values.is_connected === "1")
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

    function RequestList() {
        const cookie = JSON.parse(window.sessionStorage.getItem("user19120000"));
        const currentUser = cookie.username;
        if (currentUser === values.username)
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
        else {
            return (<div />);
        }
    }

    function EditAndRemove() {
        const cookie = JSON.parse(window.sessionStorage.getItem("user19120000"));
        const currentUser = cookie.username;
        if (currentUser === values.username)
            return (
                <div className="edit-and-remove">
                    <Link to='/posts/edit-post' state={{ values, id }} className="post-edit-remove-735">
                        <div className="button-edit-735">
                            Chỉnh sửa
                        </div>
                    </Link>

                    <Link to={{ pathname: "/posts/new-post", state: values }} className="post-edit-remove-735">
                        <div className="button-remove-735">
                            Xóa
                        </div>
                    </Link>

                </div>
            );
        else
            return null;
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




    return (
        <div className="Post">
            <Navbar />
            {console.log("after all:"), console.log(values)}

            <div className="frame-general">
                <div className="title-container-head">

                    <div className="placeholder-title-head">
                        <div className="text-title-head">
                            {values.title}
                        </div>
                    </div>
                </div>
                <UserTag />
                <ButtonConnect />
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
                                Học phí / tháng
                            </div>
                        </div>
                        <div className="placeholder-text-1">
                            <div className="select-occupation-1">
                                {values.fee}đ
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




            <RequestList />
            <EditAndRemove />


            <div style={{ position: 'relative', marginTop: "1%", marginBottom: "0px", bottom: "0", width: '100%' }}>
                <Footer />
            </div>
        </div>


    );
}




export default Post