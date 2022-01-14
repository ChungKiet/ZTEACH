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
import { useEffect } from 'react';
import axios from 'axios';
import ImageUpload from '../upload';

import FileBase64 from 'react-file-base64';

var ReactDOM = require('react-dom');

function Profile(){
  const navigate = useNavigate();
  const submitForm = () => {
    console.log("Submitted");
  }

  var isLogin = true;
  
  const { handleSubmit, handleChangeImage, listPost, listRequest, values, errors } = useForm(
      submitForm,
      validateInfo
  );
  
  // Create A Map For List Post
  

  // Create Adapter
  // Add ID

  function UserPost(props) {
    const {order, id, title, dayPost} = props;
    //const { order, username, level, gender } = props;

    return (
        <div className="flex-request-line">
            <div className="request-no-553">{order}</div>
            <div className="request-username-553">
                <a href={`http://localhost:3000/${id}`} style={{ 'text-decoration': 'none' }}>{title}</a>
            </div>
            <div className="request-level-553">{dayPost}</div>
            {/* <div className="request-gender-553">{gender}</div> */}
            <div className="request-accept-553">
                <button className="button-request-accept-553" type="submit" >
                    <div className="request-button-553">
                        Chỉnh sửa
                    </div>
                </button>
            </div>
            <div className="request-deny-553">
                <button className="button-request-deny-553" type="submit" >
                    <div className="request-button-553">
                        Xóa
                    </div>
                </button>
            </div>
        </div>
    );
  }
  const URL = window.location.pathname;
  const tmp = URL.split('/');
  const username = tmp[tmp.length - 1];
  const user = JSON.parse(window.sessionStorage.getItem('user19120000'));
  if (!user) isLogin = false;
  var isHolderAccount = false;
  if (!user){
    isHolderAccount = false;
  }
  else if (user.username === username){
    isHolderAccount = true;
  }

  function RequestSummaryLine(props) {
    const { order, username, level, gender } = props;

    return (
        <div className="flex-request-line">
            <div className="request-no-553">{order}</div>
            <div className="request-username-553">
                <a href={`http://localhost:3000/user?id=${username}`} style={{ 'text-decoration': 'none' }}>{username}</a>
            </div>
            <div className="request-level-553">{level}</div>
            <div className="request-gender-553">{gender}</div>
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
  console.log(values);
  
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
                  <img src={values.image} className='Avatar_label'/>
              </label>
              <input id="file-input" onChange={handleChangeImage} type="file" className='Avatar-input'/>
            </div>
          <div className='user_name'>
                       {values.username}
          </div>
          {values.user_type === "tutor" &&
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
            {values.user_type==="student"?"Học viên": "Gia sư"}
          </div>
          { isHolderAccount &&
          <button className='btn_edit'>
            <a href='/editprofile' > Chỉnh sửa trang cá nhân </a>
          </button>
          }
        </div>
    
        <div className='column-info'>
          <div className='name'>
            <strong>{values.name}</strong>
          </div>
          <div className='row'>
            <div className='birth-day'>
              {"Ngày sinh: " + values.birthday.substring(0,10)}
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
              {"Môn học nhận dạy: " + values.subjects.map(v=>(
                v.name + ', '
              ))}
            </div>
          </div>
          <div className='row'>
            <div className='info-user'>
              <img src={classImg} className='icon-img'/>
              {"Lớp nhận dạy: " + values.classes.map(v=>(
                v.name + ', '
              ))}
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
          </div>
          <div className='row'>
            <div className='tutor-cert-img'>
            <strong>
              Danh sách các bài đã đăng
            </strong>
            </div>
            <div>{listPost}</div>
          </div>
          <div className='row'>
            <div className='tutor-cert-img'>
            <strong>
              Danh sách các yêu cầu kết nối
            </strong>
            </div>
            <div>{listRequest}</div>
          </div>
         {/* //listRequest */}
        </div>
        {/* <div> oke</div> */}
        
        <div>
          <Footer/>
        </div>
      </div>
      )
}

export default Profile;