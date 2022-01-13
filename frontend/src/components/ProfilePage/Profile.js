import logo from '../images/logo.png';
import background from '../images/background.png';
import toprightimage from '../images/topRight.png';
import './Profile.css';
import addressImg from '../images/address.png';
import emailImg from '../images/email.png';
import classImg from '../images/class.png';
import phonecall from '../images/phonecall.png';
import subject from '../images/subject.png';
// import {Nav, NavItem, NavDropdown, Form, Button, Dropdown} from 'react-bootstrap';
import Navbar from '../Navbar';
import Footer from '../Footer';
import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import validateInfo from './validateInfo';
import useForm from './useForm';
import { useNavigate } from 'react-router-dom';


import FileBase64 from 'react-file-base64';

var ReactDOM = require('react-dom');

function Profile(){
  const navigate = useNavigate();
  const submitForm = () => {
    console.log("Submitted");
  }

  const isLogin = window.sessionStorage.getItem("isLogin");
  const { handleSubmit, values, errors } = useForm(
      submitForm,
      validateInfo
  );

  const getFiles = (filePost) => {
    this.setState({ files: filePost })
    // this.setState({intro: filePost[0]["file"]})
    console.log(filePost[0]["file"])
  }
    return (
      <div className="Profile" style={{
        backgroundImage: `url(${background})` ,
     }}>
        <Navbar/>
        {/* <FileBase64
        multiple={ true }
        onDone={ this.getFiles.bind(this) } /> */}
        <div className="row">
            <div class="image-upload" className='Avatar'>
              <label for="file-input">
                  <img src={logo} className='Avatar_label'/>
              </label>
              <input id="file-input" type="file" className='Avatar-input'/>
            </div>
          <div className='user_name'>
                       {values.username}
          </div>
          {values.user_type === "Gia sư" &&
          <div className='col'>
            <div className='tutor-literacy'>{"Trình độ: " + values.literacy + " " + values.major}</div>
            <div className='tutor-voting'>{"Đánh giá: " + values.voting + " * " +  "(" + values.evaluate+ " bài đánh giá)"}</div>
            <div className='tutor-dayreg'>{"Ngày tham gia: " + values.dayreg}</div>
          </div>
          }
          <div className='col'>
            <img src={toprightimage} className='top-right-img'/>
          </div>
        </div>
        <div className='row'>
          <div className='user_type'>
            {values.user_type}
          </div>
          <button className='btn_edit'>
            <a href='/editprofile' > Chỉnh sửa trang cá nhân </a>
          </button>
        </div>
    
        <div className='column-info'>
          <div className='name'>
            <strong>{values.name}</strong>
          </div>
          <div className='row'>
            <div className='birth-day'>
              {"Ngày sinh: " + values.birthday}
            </div>
            <div className='col'>
            <div className='user-gender'>
              {"Giới: " + values.gender}
              </div>
            </div>
          </div>
          <div className='row'>
            <div>
              <img src={addressImg} className='icon-img'/>
              {"Địa chỉ: " + values.address}
            </div>
          </div>
          <div className='row'>
            <div className='info-user'>
              <img src={emailImg} className='icon-img'/>
              {"Email: " + values.email}
            </div>
          </div>
          <div className='row'>
            <div className='info-user'>
              <img src={phonecall} className='icon-img'/>
              {"SĐT liên hệ: " + values.contact}
            </div>
          </div>
          <div className='row'>
            <div className='info-user'>
              <img src={subject} className='icon-img'/>
              {"Môn học nhận dạy: " + values.subject}
            </div>
          </div>
          <div className='row'>
            <div className='info-user'>
              <img src={classImg} className='icon-img'/>
              {"Lớp nhận dạy: " + values.classes}
            </div>
          </div>
          <div className='row'>
            <div className='intro-label'>
            <strong>
              Thông tin tự giới thiệu
            </strong>
            </div>
          </div>
          <div className='intro-user'>
            {values.intro}
          </div>
          <div className='row'>
            <div className='tutor-cert-img'>
            <strong>
              Hình ảnh các văn bằng
            </strong>
            </div>
            <div>{values.files + "Có update"}</div>
          </div>
        </div>
        <div>
          <Footer/>
        </div>
      </div>
      )
}

export default Profile;