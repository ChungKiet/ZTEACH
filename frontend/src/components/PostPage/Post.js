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
import GlobalVar from "../../GlobalVar";

import './Post.css';

import axios from "axios";

const user = GlobalVar.user;
const optionSelect = GlobalVar.optionSelect;

function Post() {
    const cookie = JSON.parse(window.sessionStorage.getItem("user19120000"));
    console.log("cookie = ");
    console.log(cookie);
    var currentUser = null;
    var userType = null;
    if (cookie !== null) {
        currentUser = cookie.username;
        userType = cookie.user_type;
    }

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
        request_list: "",
        accepted_tutor: "",
        rate: "",
    });


    useEffect(() => {
        const fetchData = () => {
            axios('http://localhost:8000/posts/' + id).then(
                res => {
                    const dt = res.data;
                    axios.post("http://localhost:8000/connects/get-post-state", { post: id, tutor: currentUser }).then(
                        res2 => {
                            const dt2 = res2.data;
                            axios.post("http://localhost:8000/connects/get-post-connect", { post: id }).then(
                                res3 => {
                                    const dt3 = res3.data;
                                    console.log("post connect = ");
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
                                        //state
                                        connect_state: dt2.state,
                                        // con
                                        request_list: dt3.requested,
                                        accepted_tutor: dt3.tutor,
                                        rate: dt3.accept.rate
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

    function UserTag() {
        if (currentUser === null || currentUser !== values.username)
            return (
                <div className="overlap-group-user">
                    <div className="box-user-head"></div>
                    <div className="flex-user">
                        <div>
                            <img className="user-img-head" src={values.image} alt={values.username} />
                        </div>
                        <div className="text-username">
                            <a href={`http://localhost:3000/profile/${values.username}`} style={{ 'textDecoration': 'none' }}>{values.username}</a>
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



    function ButtonConnect() {
        if (currentUser === null)
            return null;
        if (userType !== "tutor")
            return null;
        if (currentUser === values.username)
            return null

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
                <button className="button-requested" onClick={() => {
                    axios.delete("http://localhost:8000/connects/delete-post-connect", { data: { user: values.username, tutor: currentUser, post: id } }).then(
                        res => {
                            if (res.data.result === 1) {
                                alert('Đã hủy yêu cầu');
                                window.location.reload(`/post/${id}`);
                            } else {
                                alert('Đã xảy ra lỗi khi hủy yêu cầu. Thử lại sau.');
                            }
                        }
                    );
                }}>
                    <div className="button-connect-text">
                        Đã yêu cầu
                    </div>
                </button>
            );
        else if (values.connect_state === 0 || values.connect_state === "0") {
            return (
                <button className="button-connect" onClick={() => {
                    axios.post("http://localhost:8000/connects/new-post-connect", { user: values.username, tutor: currentUser, post: id }).then(
                        res => {
                            if (res.data.result === 1) {
                                alert('Đã yêu cầu kết nối để nhận lớp!');
                                window.location.reload(`/post/${id}`);
                            } else {
                                alert('Đã xảy ra lỗi khi gửi yêu cầu. Thử lại sau.');
                            }
                        }
                    );
                }}>
                    <div className="button-connect-text">
                        Kết nối
                    </div>
                </button>
            );
        }
        else return null;
    }

    function RequestList() {
        // Guest - restricted infomation
        if (currentUser === null)
            return null
        if (currentUser === values.username && values.connect_state !== 3)
            // OWN - Not have accepted connection with any tutor
            if (values.request_list.length < 1)
                return null;
            else
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
        else if (values.connect_state === 3)
            // OWN - Accepted connection with a tutor
            // Others tutor - cannot do anything more, just see the tutor information
            return (
                <div>
                    <AcceptedTutor />
                    <UpdateRate />
                </div>
            )
        else
            // The tutor that has been accepted
            return null;

    }

    function AcceptedTutor() {
        return (
            <div className="flex-row-tutor-accepted">
                <div className="accepted-label">Được nhận dạy bởi: </div>

                <div className="overlap-group-user">
                    <div className="box-user-head">
                        <div className="flex-user">
                            <div><img className="user-img-head" src={values.accepted_tutor.image} alt={values.username} /></div>
                            <div className="text-username">
                                <a href={`http://localhost:3000/profile/${values.accepted_tutor.username}`}
                                    style={{ 'textDecoration': 'none', 'fontSize': '30px', 'fontWeight': 'bold' }}>
                                    {values.accepted_tutor.username}</a>
                            </div>
                        </div>
                    </div>
                </div>

                <RatedStar />
            </div>
        )
    }

    function RatedStar() {
        if (values.rate > 0)
            return (
                <div style={{'textAlign' : 'center'}}>
                <div style={{ 'marginLeft': '5px', 'fontSize': '20px' }}>Đánh giá từ người học:
                    <span style={{ 'marginLeft': '15px', 'fontSize': '40px' }}>{values.rate}&#11088;</span>
                </div>
                </div>
            )
        else return null;
    }

    function RequestSummaryLine(props) {
        const { order, username, level, gender } = props;

        return (
            <div className="flex-request-line">
                <div className="request-no-735">{order}</div>
                <div className="request-username-735">
                    <a href={`http://localhost:3000/profile/${username}`} style={{ 'textDecoration': 'none' }}>{username}</a>
                </div>
                <div className="request-level-735">{level}</div>
                <div className="request-gender-735">{gender}</div>
                <div className="request-accept-735">
                    <button className="button-request-accept-735" onClick={() => {
                        axios.put("http://localhost:8000/connects/accept-connect", { user: currentUser, tutor: username, post: id })
                            .then(window.location.reload(`/post/${id}`)
                            )
                    }} >
                        <div className="request-button-735">
                            Chấp nhận
                        </div>
                    </button>
                </div>
                <div className="request-deny-735">
                    <button className="button-request-deny-735" onClick={() => {
                        axios.delete("http://localhost:8000/connects/delete-post-connect", { data: { user: currentUser, tutor: username, post: id } }).then(
                            res => {
                                if (res.data.result === 1) {
                                    alert('Đã xóa yêu cầu');
                                    window.location.reload(`/post/${id}`);
                                } else {
                                    alert('Đã xảy ra lỗi khi xóa yêu cầu. Thử lại sau.');
                                }
                            }
                        );
                    }} >
                        <div className="request-button-735">
                            Từ chối
                        </div>
                    </button>
                </div>
            </div>
        );
    }

    function EditPostButton() {
        if (values.connect_state !== 3)
            return (
                <Link to='/edit-post' state={{ values, id }} className="post-edit-remove-735">
                    <div className="button-edit-735">
                        Chỉnh sửa
                    </div>
                </Link>
            )
        else
            return null;
    }

    function DeletePostButton() {
        return (
            <button className="post-edit-remove-735" onClick={() => {
                if (window.confirm('Bạn thực sự muốn xóa vĩnh viễn bài đăng này?'))
                    axios.delete("http://localhost:8000/posts/delete", { data: { id: id } }).then(
                        res => {
                            if (res.data.result === 1) {
                                alert('Đã bay màu T-T');
                                window.location.replace('/post-list');
                            } else {
                                alert('Đã xảy ra lỗi khi xóa bài. Thử lại sau :))');
                            }
                        }
                    );
            }}>
                <div className="button-remove-735">
                    Xóa
                </div>
            </button>
        )
    }

    function EditAndRemove() {
        if (currentUser === null)
            return null;
        if (currentUser === values.username)
            return (
                <div className="edit-and-remove">
                    <EditPostButton />
                    <DeletePostButton />

                </div>
            );
        else
            return null;
    }

    function UpdateRate() {
        if (currentUser === values.username)
            return (
                <div className="flex-row-tutor-accepted">
                    <div className="accepted-label">Cập nhật đánh giá: </div>
                    <div className="overlap-group-rate">
                        <div className="box-user-head"></div>
                        <div className="flex-user">
                            <RadioButtonRate star={1} />
                            <RadioButtonRate star={2} />
                            <RadioButtonRate star={3} />
                            <RadioButtonRate star={4} />
                            <RadioButtonRate star={5} />
                        </div>
                    </div>

                </div>
            )
        else return null;
    }

    function RadioButtonRate(props) {
        const star = props.star;
        return (

            <label className="label-radiobtn">
                <input id={"rate" + star} value={star} name="radiobtn_rate" type="radio" onChange={() => {
                    axios.put('http://localhost:8000/connects/new-tutor-rate',
                        { user: currentUser, tutor: values.accepted_tutor.username, post: id, rate: star }).then(res => {
                            window.location.reload('/post/' + id)
                        })
                }} />
                {star}
            </label>

        )
    }
}

export default Post