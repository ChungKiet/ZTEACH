import React, { Component, useState, findDOMNode } from "react";
import { Form, Button} from 'react-bootstrap';
import Navbar from '../Navbar';
import Footer from '../Footer';
import 'bootstrap/dist/css/bootstrap.css';

import './NewPost.css';


var ReactDOM = require('react-dom');

class NewPost extends Component {
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

    optionSelect = {
        subject: [
            { name: 'Toán', id: "MTH" },
            { name: 'Lý', id: "PHY" },
            { name: 'Hóa', id: "CHE" },
            { name: 'Sinh', id: "BIO" },
            { name: 'Văn', id: "LIT" },
            { name: 'Sử', id: "HIS" },
            { name: 'Địa', id: "GEO" },
            { name: 'KHTN', id: "SCI" },
            { name: 'KHXH', id: "SOC" }

        ],

        grade: [
            { name: 'Lớp 5', id: "5" },
            { name: 'Lớp 6', id: "6" },
            { name: 'Lớp 7', id: "7" },
            { name: 'Lớp 8', id: "8" },
            { name: 'Lớp 9', id: "9" },
            { name: 'Lớp 10', id: "10" },
            { name: 'Lớp 11', id: "11" },
            { name: 'Lớp 12', id: "12" },
        ],

        place: [
            { name: 'Q1', id: "Q01" },
            { name: 'Q2', id: "Q02" },
            { name: 'Q3', id: "Q03" },
            { name: 'Q4', id: "Q04" },
            { name: 'Q5', id: "Q05" },
            { name: 'Q6', id: "Q06" },
            { name: 'Q7', id: "Q07" },
            { name: 'Q8', id: "Q08" },
            { name: 'Q9', id: "Q09" },
            { name: 'Q10', id: "Q10" },
            { name: 'Q11', id: "Q11" },
            { name: 'Q12', id: "Q12" },
            { name: 'Bình Chánh', id: "Bình Chánh" },
            { name: 'Bình Thạnh', id: "Bình Thạnh" },
            { name: 'Bình Tân', id: "Bình Tân" },
            { name: 'Cần Giờ', id: "Cần Giờ" },
            { name: 'Củ Chi', id: "Củ Chi" },
            { name: 'Gò Vấp', id: "Gò Vấp" },
            { name: 'Hóc Môn', id: "Hóc Môn" },
            { name: 'Nhà Bè', id: "Nhà Bè" },
            { name: 'Phú Nhuận', id: "Phú Nhuận" },
            { name: 'Tân Bình', id: "Tân Bình" },
            { name: 'Tân Phú', id: "Tân Phú" },
            { name: 'Thủ Đức', id: "Thủ Đức" },
            { name: 'Online', id: "Online" }
        ],

        daysperweek: [
            { name: '1', id: "1" },
            { name: '2', id: "2" },
            { name: '3', id: "3" },
            { name: '4', id: "4" },
            { name: '5', id: "5" },
            { name: '6', id: "6" },
            { name: '7', id: "7" }
        ],

        duration: [
            { name: '1h', id: "1" },
            { name: '1.5h', id: "1.5" },
            { name: '2h', id: "2" },
            { name: '2.5h', id: "2.5" },
            { name: '3h', id: "3" },
            { name: '4h', id: "4" }
        ],

        tutor_gender: [
            { name: 'Nam', id: "0" },
            { name: 'Nữ', id: "1" },
            { name: 'Khác', id: "Khác" }
        ],
        tutor_level: [
            { name: "Sinh viên", id: "Sinh viên" },
            { name: "Giảng viên", id: "Giảng viên" }
        ]
    }

    setSubject = (textChange) => {
        var subject = { ...this.state.subject }
        subject = textChange
        this.setState({ subject })
    }

    setGrade = (textChange) => {
        var grade = { ...this.state.grade }
        grade = textChange
        this.setState({ grade })
    }

    setPlace = (textChange) => {
        var place = { ...this.state.place }
        place = textChange
        this.setState({ place })
    }

    setDaysPerWeek = (textChange) => {
        var daysperweek = { ...this.state.daysperweek }
        daysperweek = textChange
        this.setState({ daysperweek })
    }

    setDuration = (textChange) => {
        var duration = { ...this.state.duration }
        duration = textChange
        this.setState({ duration })
    }

    setStartDate = (textChange) => {
        var start_date = { ...this.state.start_date }
        start_date = textChange
        this.setState({ start_date })
    }

    setTitle = (textChange) => {
        var title = { ...this.state.title }
        title = textChange
        this.setState({ title })
    }

    setDetail = (textChange) => {
        var detail = { ...this.state.detail }
        detail = textChange
        this.setState({ detail })
    }

    setTutorLevel = (textChange) => {
        var tutor_level = { ...this.state.tutor_level }
        tutor_level = textChange
        this.setState({ tutor_level })
    }

    setTutorGender = (textChange) => {
        var tutor_gender = { ...this.state.tutor_gender }
        tutor_gender = textChange
        this.setState({ tutor_gender })
    }

    setSalary = (textChange) => {
        var salary = { ...this.state.salary }
        salary = textChange
        this.setState({ salary })
    }

    render() {
        let optionSubject = this.optionSelect.subject.map(v => (
            <option value={v.id}>{v.name}</option>
        ));
        let optionGrade = this.optionSelect.grade.map(v => (
            <option value={v.id}>{v.name}</option>
        ));
        let optionPlace = this.optionSelect.place.map(v => (
            <option value={v.id}>{v.name}</option>
        ));
        let optionDPW = this.optionSelect.daysperweek.map(v => (
            <option value={v.id}>{v.name}</option>
        ));
        let optionDuration = this.optionSelect.duration.map(v => (
            <option value={v.id}>{v.name}</option>
        ));
        let optionGender = this.optionSelect.tutor_gender.map(v => (
            <option value={v.id}>{v.name}</option>
        ));
        let optionLevel = this.optionSelect.tutor_level.map(v => (
            <option value={v.id}>{v.name}</option>
        ));

        return (
            <div className="NewPost">
                <Navbar />

                <div className="label-dangbaitimkiemgiasu">
                    <div>ĐĂNG BÀI TÌM KIẾM GIA SƯ</div>
                </div>

                {/* Group 1 - Class */}
                <div className="group-view-thongtin">
                    <div className="overlap-group">
                        <div className='label-thongtin'>
                            Thông tin về lớp học
                        </div>
                    </div>
                    <div className="flex-row">
                        {/* Subject */}
                        <select id="id-select-subject"
                            className='text-occupation'
                            value={this.state.subject}

                            onChange={e => this.setState({ subject: e.target.value })}
                        >
                            {optionSubject}
                            <option value="" disabled >
                                Chọn môn học
                            </option>
                        </select>

                        {/* Grade */}
                        <div >
                            <select id="id-select-grade"
                                className='text-occupation'
                                value={this.state.grade}
                                onChange={e => this.setState({ grade: e.target.value })}
                            >
                                {optionGrade}
                                <option value="" disabled>
                                    Chọn lớp
                                </option>
                            </select>
                        </div>

                        {/* Place */}
                        <div >
                            <select id="id-select-place"
                                className='text-occupation'
                                value={this.state.place}
                                onChange={e => this.setState({ place: e.target.value })}

                            >
                                {optionPlace}
                                <option value="" disabled>
                                    Chọn nơi học
                                </option>
                            </select>
                        </div>
                    </div>
                    <div className="flex-row">
                        {/* DaysPerWeek */}

                        <div >
                            <select id="id-select-dpw"
                                className='text-occupation'
                                value={this.state.daysperweek}
                                onChange={e => this.setState({ daysperweek: e.target.value })}

                            >
                                {optionDPW} 
                                <option value="" disabled>
                                    Chọn số buổi / tuần
                                </option>
                            </select>
                        </div>


                        {/* Duration */}

                        <div >
                            <select id="id-select-duration"
                                className='text-occupation'
                                value={this.state.duration}
                                onChange={e => this.setState({ duration: e.target.value })}

                            >
                                {optionDuration}
                                <option value="" disabled>
                                    Chọn thời lượng mỗi buổi học
                                </option>
                            </select>
                        </div>


                        <div className="list-box-thoigianbatdau">
                            {/* start_date */}
                            <Form.Control required controlId="duedate"
                                onChange={(e) => this.setState({ start_date: e.target.value })}
                                type="date"
                                name="duedate"
                                placeholder="Ngày bắt đầu học"
                            />
                        </div>
                    </div>
                    {/* END FLEX ROW */}

                    {/* Title */}
                    <Form.Control type='text' className="class-title" placeholder='Thêm tiêu đề...'
                        value={this.state.title}
                        onChange={e => this.setState({ title: e.target.value })}
                        style={{
                            width: '500px',
                            height: '40px',
                            borderRadius: '10px',
                            textAlign: 'left',
                            marginTop: '5%',
                            marginLeft: '30px',
                            boxShadow: '1px 3px 3px 1px #9E9E9E',

                        }}>
                    </Form.Control>

                    {/* Detail */}

                    <Form.Control as='textarea' className="class-detail" placeholder='Thêm thông tin chi tiết...'
                        value={this.state.detail}
                        onChange={e => this.setState({ detail: e.target.value })}
                        style={{
                            height: '150px',
                            borderRadius: '10px',
                            textAlign: 'left-top',
                            marginTop: '1%',
                            marginLeft: '30px',
                            boxShadow: '1px 3px 3px 1px #9E9E9E',
                        }}>
                    </Form.Control>
                </div>


                {/* Group 2 - Tutor */}

                <div className="group-view-thongtin">
                    <div className="overlap-group">
                        <div className='label-thongtin'>
                            Thông tin về gia sư
                        </div>
                    </div>

                    <div className="flex-row">
                        {/* tutor_level */}
                        <div className="list-box-lop">
                            <div >
                                <select id="id-select-level"
                                    className='text-occupation'
                                    value={this.state.tutor_level}
                                    onChange={e => this.setState({ tutor_level: e.target.value })}

                                >
                                    {optionLevel}
                                    <option value="" disabled>
                                        Trình độ
                                    </option>
                                </select>
                            </div>
                        </div>

                        {/* tutor_gender */}

                        <div >
                            <select id="id-select-gender"
                                className='text-occupation'
                                value={this.state.tutor_gender}
                                onChange={e => this.setState({ tutor_gender: e.target.value })}

                            >
                                {optionGender}
                                <option value="" disabled>
                                    Giới tính
                                </option>
                            </select>
                        </div>


                        {/* salary */}

                        <Form.Control type='text' className="text-occupation" placeholder='Mức lương (/buổi)'
                            value={this.state.salary}
                            onChange={e => this.setState({ salary: e.target.value })}
                        >
                        </Form.Control>

                    </div>
                </div>


                    <div className="flex-row">
                        <Button variant="warning" className="button-occupation" type="submit">
                            <h1 className="medium-button montserrat-semi-bold-white-30px">
                                Đăng
                            </h1>
                        </Button>
                        <Button variant="dark" className="button-occupation" >
                            <h1 className="medium-button montserrat-semi-bold-white-30px">
                                Hủy
                            </h1>
                        </Button>
                    </div>






                <div style={{position: 'fixed', marginBottom: "0px", bottom: "0", width: '100%' }}>
                    <Footer />
                </div>
            </div>


        );

    }


}


export default NewPost