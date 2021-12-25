import React, { Component, useState, findDOMNode } from "react";
import { Nav, NavItem, NavDropdown, Form, Button, Dropdown } from 'react-bootstrap';
import Navbar from '../Navbar';
import Footer from '../Footer';
import 'bootstrap/dist/css/bootstrap.css';
import { MultiSelect } from "react-multi-select-component";
import Container from 'react-bootstrap/Container';

import logo from '../images/logo.png';
import profile from '../images/profile.png';
import background from '../images/background.png';
import toprightimage from '../images/topRight.png';
import bottomrightimage from '../images/bottomRight.png';
import tutorprofile from '../images/tutorProfile2.png';
import './NewPost.css';
import addressImg from '../images/address.png';
import emailImg from '../images/email.png';
import classImg from '../images/class.png';
import phonecall from '../images/phonecall.png';
import subject from '../images/subject.png';


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
            { name: 'Toán', id: "Toán" },
            { name: 'Lý', id: "Lý" },
            { name: 'Hóa', id: "Hóa" },
            { name: 'Sinh', id: "Sinh" },
            { name: 'Văn', id: "Văn" },
            { name: 'Sử', id: "Sử" }
        ],

        grade: [
            { name: '8', id: "8" },
            { name: '9', id: "9" },
            { name: '10', id: "10" },
            { name: '11', id: "11" },
            { name: '12', id: "12" },
            { name: 'LTDH', id: "LTDH" }
        ],

        place: [
            { name: 'Q1', id: "Q1" },
            { name: 'Q2', id: "Q2" },
            { name: 'Q3', id: "Q3" },
            { name: 'Q4', id: "Q4" },
            { name: 'Q5', id: "Q5" },
            { name: 'Online', id: "Online" }
        ],

        daysperweek: [
            { name: '1', id: "1" },
            { name: '2', id: "2" },
            { name: '3', id: "3" },
            { name: '4', id: "4" },
            { name: '5', id: "5" },
            { name: '6', id: "6" }
        ],

        duration: [
            { name: '1', id: "1" },
            { name: '1.5', id: "1.5" },
            { name: '2', id: "2" },
            { name: '2.5', id: "2.5" },
            { name: '3', id: "3" },
            { name: '4', id: "4" }
        ],

        tutor_gender: [
            { name: 'Nam', id: "Nam" },
            { name: 'Nữ', id: "Nữ" },
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
            <div className="NewPost" style={{
                backgroundImage: `url(${background})`,
            }}>
                <Navbar />
                <img src={toprightimage} style={{ position: 'absolute', right: '0', width: '200px' }} />
                <Form className='form-new-post'>


                    <Form.Group>
                        <div className="intro-info">
                            Đăng bài tìm kiếm gia sư
                        </div>

                        <div className='label-post'>
                            Thông tin về lớp học
                        </div>
                        {/* Subject */}
                        <div >
                            <select id="id-select-subject"
                                className='class-select-subject'
                                value={this.state.subject}
                                onChange={e => this.setState({ subject: e.target.value })}
                                style={{
                                    width: '184px',
                                    height: '30px',
                                    borderRadius: '3%',
                                    marginLeft: '45px',
                                    boxShadow: "1px 3px 1px #9E9E9E",
              
                                }}
                            >
                                {optionSubject}
                                <option value="" disabled>
                                    Chọn môn học
                                </option>
                            </select>
                        </div>

                        {/* Grade */}
                        <div >
                            <select id="id-select-grade"
                                className='class-select-grade'
                                value={this.state.grade}
                                onChange={e => this.setState({ grade: e.target.value })}
                                style={{
                                    width: '184px',
                                    height: '30px',
                                    borderRadius: '3%',
                                    marginLeft: '45px',
                                    boxShadow: "1px 3px 1px #9E9E9E",
                                }}
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
                                className='class-select-place'
                                value={this.state.place}
                                onChange={e => this.setState({ place: e.target.value })}
                                style={{
                                    width: '184px',
                                    height: '30px',
                                    borderRadius: '3%',
                                    marginLeft: '45px',
                                    boxShadow: "1px 3px 1px #9E9E9E",
                                }}
                            >
                                {optionPlace}
                                <option value="" disabled>
                                    Chọn nơi học
                                </option>
                            </select>
                        </div>

                        {/* DaysPerWeek */}
                        <div >
                            <select id="id-select-dpw"
                                className='class-select-dpw'
                                value={this.state.daysperweek}
                                onChange={e => this.setState({ daysperweek: e.target.value })}
                                style={{
                                    width: '184px',
                                    height: '30px',
                                    borderRadius: '3%',
                                    marginLeft: '45px',
                                    boxShadow: "1px 3px 1px #9E9E9E",
                                }}
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
                                className='class-select-duration'
                                value={this.state.duration}
                                onChange={e => this.setState({ duration: e.target.value })}
                                style={{
                                    width: '184px',
                                    height: '30px',
                                    borderRadius: '3%',
                                    marginLeft: '45px',
                                    boxShadow: "1px 3px 1px #9E9E9E",
                                }}
                            >
                                {optionDuration}
                                <option value="" disabled>
                                    Chọn thời lượng mỗi buổi học
                                </option>
                            </select>
                        </div>

                        {/* start_date */}
                        <Form.Control required controlId="duedate" style={{
                            marginLeft: "-200px",
                            width: "200px",
                        }}
                            onChange={(e) => this.setState({ start_date: e.target.value })}
                            type="date"
                            name="duedate"
                            placeholder="Ngày bắt đầu học"
                        />

                        {/* Title */}
                        <Form.Control type='text' className="class-title" placeholder='Thêm tiêu đề...'
                            value={this.state.title}
                            onChange={e => this.setState({ title: e.target.value })}
                            style={{
                                width: '184px',
                                height: '30px',
                                borderRadius: '3%',
                                marginLeft: '45px',
                                boxShadow: "1px 3px 1px #9E9E9E",
                            }}>
                        </Form.Control>

                        {/* Place */}
                        <Form.Control type='text' className="class-detail" placeholder='Thêm thông tin chi tiết...'
                            value={this.state.detail}
                            onChange={e => this.setState({ place: e.target.value })}
                            style={{
                                width: '184px',
                                height: '30px',
                                borderRadius: '3%',
                                marginLeft: '45px',
                                boxShadow: "1px 3px 1px #9E9E9E",
                            }}>
                        </Form.Control>

                        <div className='label-tutor'>
                            Thông tin về gia sư
                        </div>

                        {/* tutor_level */}
                        <div >
                            <select id="id-select-level"
                                className='class-select-level'
                                value={this.state.tutor_level}
                                onChange={e => this.setState({ tutor_level: e.target.value })}
                                style={{
                                    width: '184px',
                                    height: '30px',
                                    borderRadius: '3%',
                                    marginLeft: '45px',
                                    boxShadow: "1px 3px 1px #9E9E9E",
                                }}
                            >
                                {optionLevel}
                                <option value="" disabled>
                                    Trình độ
                                </option>
                            </select>
                        </div>

                        {/* tutor_gender */}
                        <div >
                            <select id="id-select-gender"
                                className='class-select-gender'
                                value={this.state.tutor_gender}
                                onChange={e => this.setState({ tutor_gender: e.target.value })}
                                style={{
                                    width: '184px',
                                    height: '30px',
                                    borderRadius: '3%',
                                    marginLeft: '45px',
                                    boxShadow: "1px 3px 1px #9E9E9E",
                                }}
                            >
                                {optionGender}
                                <option value="" disabled>
                                    Giới tính
                                </option>
                            </select>
                        </div>

                        {/* salary */}
                        <Form.Control type='text' className="class-salary" placeholder='Mức lương'
                            value={this.state.salary}
                            onChange={e => this.setState({ salary: e.target.value })}
                            style={{
                                width: '184px',
                                height: '30px',
                                borderRadius: '3%',
                                marginLeft: '45px',
                                boxShadow: "1px 3px 1px #9E9E9E",
                            }}>
                        </Form.Control>



                        <Button variant="warning" style={{
                            borderRadius: '3%',
                            marginLeft: '85px',
                            boxShadow: "1px 3px 1px #9E9E9E"
                        }} type="submit">
                            Submit
                        </Button>
                        <Button variant="dark" className="row ml-n3" style={{
                            marginTop: "1px",
                            borderRadius: '3%',
                            marginLeft: '75px',
                            boxShadow: "1px 3px 1px #9E9E9E"
                        }}>
                            Hủy
                        </Button>
                    </Form.Group>


                </Form>
                <img src={bottomrightimage} style={{ position: "absolute", right: "0", width: '200px' }} />
                <div style={{ marginTop: "150px", marginBottom: "0px", bottom: "0" }}>
                    <Footer />
                </div>
            </div>


        );

    }


}

export default NewPost