import logo from '../images/logo.png';
import profile from '../images/profile.png';
import background from '../images/background.png';
import toprightimage from '../images/topRight.png';
import bottomrightimage from '../images/bottomRight.png';
import tutorprofile from '../images/tutorProfile2.png';
import './Profile.css';
import addressImg from '../images/address.png';
import emailImg from '../images/email.png';
import classImg from '../images/class.png';
import phonecall from '../images/phonecall.png';
import subject from '../images/subject.png';
import {Nav, NavItem, NavDropdown, Form, Button, Dropdown} from 'react-bootstrap';
import Navbar from '../Navbar';
import Footer from '../Footer';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
// import { LinkContainer } from 'react-router-bootstrap';
import React, { Component, useState, findDOMNode } from "react";
// import { axios } from 'axios';
// import { CheckBoxSelection, Inject, MultiSelectComponent } from '@syncfusion/ej2-react-dropdowns';

import FileBase64 from 'react-file-base64';

var ReactDOM = require('react-dom');

class Profile extends Component {
  constructor(props){
    super(props);
    this.testRef = React.createRef();
  }
  state = {
    username: "HieuPC",
    intro: "Sinh viên năm 4 ngành CNTT trường KHTN Sinh viên năm 4 ngành CNTT trường KHTN Sinh viên năm 4 ngành CNTT trường KHTN Sinh viên năm 4 ngành CNTT trường KHTN Sinh viên năm 4 ngành CNTT trường KHTN",
    name: "Chung Hoàng Tuấn Kiệt",
    user_type: "Học viên",
    gender: {
      value: "Nam",
      secure: "Công khai"
    },
    date: {
      value: "17/12/2001",
      secure: "Riêng tư"
    },
    major: "CNTT",
    level: "Sinh viên",
    voting: "4.5",
    evalutate: "10",
    dayreg: "01/01/2022",
    salary: "",
    class: "9, 10, 11",
    subject: "Toán, Lý",
    address: {
      value: "No address",
      secure: "Riêng tư"
    },
    email: {
      value: "No email",
      secure: "Riêng tư"
    },
    phone: {
      value: "No phone",
      secure: "Riêng tư"
    },
    files: []
    // checkboxStyle : {
    //   display: 'none',
    //   border: '1px #8DF5E4 solid'
    // }
  };


  getFiles = (filePost) => {
    this.setState({ files: filePost })
    // this.setState({intro: filePost[0]["file"]})
    console.log(filePost[0]["file"])
  }

  render() {
    return (
      <div className="Profile" style={{
        backgroundImage: `url(${background})` ,
     }}>
        <Navbar/>
        {/* <FileBase64
        multiple={ true }
        onDone={ this.getFiles.bind(this) } /> */}
        <div className="row" style={{marginLeft: '30px', marginTop:'30px'}}>
            <div class="image-upload" className='Avatar'>
              <label for="file-input">
                  <img src={logo} className='Avatar_label'/>
              </label>
              <input id="file-input" type="file" className='Avatar-input'/>
            </div>
          <div className='user_name'>
                       {this.state.username}
          </div>
          <div className='col' style={{
                      marginLeft: "300px", marginTop: "15px",
                      }}>
            <div>{"Trình độ: " + this.state.level + " " + this.state.major}</div>
            <div>{"Đánh giá: " + this.state.voting + " * " +  "(" + this.state.evalutate+ " bài đánh giá)"}</div>
            <div>{"Ngày tham gia: " + this.state.dayreg}</div>
          </div>
          <div className='col'>
            <img src={toprightimage} style={{marginLeft:"20px", width:'120px'}}/>
          </div>
        </div>
        <div className='row'>
          <div className='user_type'>
            {this.state.user_type}
          </div>
          <button className='btn-edit'>
            Chỉnh sửa trang cá nhân
          </button>
        </div>
    
        <div className='column-info'>
          <div className='name'>
            <strong>{this.state.name}</strong>
          </div>
          <div className='row'>
            <div className='birth-day'>
              {"Ngày sinh: " + this.state.date.value}
            </div>
            <div className='col' style={{marginTop: '10px', marginLeft: '0px'}}>
              {"Giới: " + this.state.gender.value}
            </div>
          </div>
          <div className='row'>
            <div>
              <img src={addressImg} className='icon-img'/>
              {"Địa chỉ: " + this.state.address.value}
            </div>
          </div>
          <div className='row'>
            <div className='info-user'>
              <img src={emailImg} className='icon-img'/>
              {"Email: " + this.state.email.value}
            </div>
          </div>
          <div className='row'>
            <div className='info-user'>
              <img src={phonecall} className='icon-img'/>
              {"SĐT liên hệ: " + this.state.phone.value}
            </div>
          </div>
          <div className='row'>
            <div className='info-user'>
              <img src={subject} className='icon-img'/>
              {"Môn học nhận dạy: " + this.state.subject}
            </div>
          </div>
          <div className='row'>
            <div className='info-user'>
              <img src={classImg} className='icon-img'/>
              {"Lớp nhận dạy: " + this.state.class}
            </div>
          </div>
          <div className='row' style={{fontSize: "20px", width: "300px", marginTop:"30px"}}>
            <strong>
              Thông tin tự giới thiệu
            </strong>
          </div>
          <div className='intro-user'>
            {this.state.intro}
          </div>
          <div className='row' style={{fontSize: "20px", width: "300px", marginTop:"30px"}}>
            <strong>
              Hình ảnh các văn bằng
            </strong>
            <div>{this.state.files + "Có update"}</div>
          </div>
        </div>
        <div>
          <Footer/>
        </div>
      </div>
      );
  }
}

export default Profile;