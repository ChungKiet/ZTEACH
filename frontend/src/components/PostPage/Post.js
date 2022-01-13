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
import GlobalVar from "../../GlobalVar";

import './Post.css';

import axios from "axios";

const user = GlobalVar.user;
const optionSelect = GlobalVar.optionSelect;

function Post() {
    const cookie = JSON.parse(window.sessionStorage.getItem("user19120000"));
    var currentUser = null;
    if (cookie !== null)
        currentUser = cookie.username;
    const URL = window.location.pathname;
    const tmp = URL.split('/');
    const id = tmp[tmp.length - 1];
    const [values, setValues] = useState({
        username: "",
        image: "",
        subject: "",
        grade: "",
        study_form: "",
        lessons: "",
        time: "",
        start: "",
        title: "",
        information: "",
        literacy: "",
        gender: "",
        fee: "",
        request: "",
        connect_state: "",
        request_list: ""
    });


    useEffect(() => {
        const fetchData =  () => {
             axios('http://localhost:8000/posts/' + id).then(
                res => {
                    const dt = res.data;
                    axios.post("http://localhost:8000/connects/get-post-state", { post: id, tutor: currentUser }).then(
                        res2 => {
                            const dt2 = res2.data;
                            axios.post("http://localhost:8000/connects/get-post-connect", { post: id}).then(
                            res3 => {
                            const dt3 = res3.data;
                            console.log("dt3 = ");
                            console.log(dt3);
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
                                connect_state: dt2.state,
                                request_list: dt3
                            });

                            }
                            )

                        }
                    )

                }
            )
        }


        fetchData();
    }, []);



    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    function connectToPost() {
        console.log("clicked connect!");
        axios.post("http://localhost:8000/connects/new-post-connect", { user : values.username, tutor: currentUser, post: id }).then(
            res => {
                if (res.data.result === 1) {
                    alert('Tạo kết nối thành công');
                    window.location.reload(`/posts/${id}`);
                } else {
                    alert('Đã xảy ra lỗi khi gửi yêu cầu. Thử lại sau.');
                }
            }
        );
    }

    function cancelConnectToPost() {
        console.log("clicked disconnect!");
        axios.delete("http://localhost:8000/connects/delete-post-connect", {data :{ user : values.username, tutor: currentUser, post: id }}).then(
            res => {
                if (res.data.result === 1) {     
                    alert('Đã hủy yêu cầu');
                    window.location.reload(`/posts/${id}`);
                } else {
                    alert('Đã xảy ra lỗi khi hủy yêu cầu. Thử lại sau.');
                }
            }
        );
    }

    function UserTag() {
        const cookie = JSON.parse(window.sessionStorage.getItem("user19120000"));
        var currentUser = null;
        if (cookie !== null)
            currentUser = cookie.username;
        if (currentUser === null || currentUser !== values.username)
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
        if (cookie === null)
            return null;
        const currentUser = cookie.username;
        if (currentUser === values.username) {
            return (
                <div />
            )
        }
        else if (values.connect_state === 2 || values.connect_state === "2")
            return (
                <button className="button-connected">
                    <div className="button-connect-text">
                        Đã kết nối
                    </div>
                </button>
            )
        else if (values.connect_state === 1 || values.connect_state === "1")
            return (
                <button className="button-requested" onClick={cancelConnectToPost}>
                    <div className="button-connect-text">
                        Đã yêu cầu
                    </div>
                </button>
            );
        else if (values.connect_state === 0 || values.connect_state === "0") {
            return (
                <button className="button-connect" onClick={connectToPost}>
                    <div className="button-connect-text">
                        Kết nối
                    </div>
                </button>
            );
        }
        else return null;

    }


    function RequestList() {
        const cookie = JSON.parse(window.sessionStorage.getItem("user19120000"));
        if (cookie === null)
            return null;
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
                            {values.request_list.map((v, index) => (
                            <RequestSummaryLine order={index + 1} username={v.username} level={v.literacy} gender={v.gender}></RequestSummaryLine>))}

                        </div>
                    </div>
                </div>)
        else {
            return (<div />);
        }
    }

    function EditAndRemove() {
        const cookie = JSON.parse(window.sessionStorage.getItem("user19120000"));
        if (cookie === null)
            return null;
        const currentUser = cookie.username;
        if (currentUser === values.username)
            return (
                <div className="edit-and-remove">
                    <Link to='/edit-post' state={{ values, id }} className="post-edit-remove-735">
                        <div className="button-edit-735">
                            Chỉnh sửa
                        </div>
                    </Link>

                    <Link to='/edit-post' state={{ values, id }} className="post-edit-remove-735">
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
            {console.log("currentUser:"), console.log(currentUser), console.log("after all:"), console.log(values), console.log(values.connect_state), console.log(values.request_list)}

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