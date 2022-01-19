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
import { useState } from 'react';

import FileBase64 from 'react-file-base64';

var ReactDOM = require('react-dom');

function Profile(){
  const navigate = useNavigate();
  const submitForm = () => {
    console.log("Submitted");
  }

  var isLogin = true;
  
  const { handleSubmit, handleChangeImage, ButtonConnect, RequestListConnect,handleChangeCert,  setPics, removeImage, pics, listPost, listRequest, values, errors } = useForm(
      submitForm,
      validateInfo
  );
  
  // Create A Map For List Post
  
  // Tạo 1 cái giống class để hiển thị và lưu gửi đi


  // Create Adapter
  // Add ID
  // const certAdapter = ()=>{
  //   var res = [];
  //   var temp = {id: -1, imgUrl: values.image}
  //   for (let i = 0; i < values.certificate.length; i++){
  //     temp["id"] = i + 1;
  //     temp["imgUrl"] = values.certificate[i];
  //     res.push(temp);
  //   }
  //   return res;
  // }

  // const allImages = certAdapter();
  //  [
  //   {
  //     id: 1,
  //     imgUrl: values.image
  //   },
  //   {
  //     id: 2,
  //     imgUrl: values.image
  //   },
  //   {
  //     id: 3,
  //     imgUrl: values.image
  //   }
  // ];

  

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

  function PostList() {
    return (
        <div>
            <div className="overlap-group-requests-553">
                <div className="box-outline-553"></div>
                <div className="flex-request-heads-553">
                    <div className="request-no-553">STT</div>
                    <div className="request-username-553"> Bài đăng</div>
                    <div className="request-level-553">Ngày đăng</div>
                </div>
                <div className="request-list-553">
                    {listPost}
                </div>
            </div>
        </div>)
  } 
    function Evaluate(){
      return (
        <div class="rate">
          <input type="radio" id="star5" name="rate" value="5" />
          <label for="star5" title="text">5 stars</label>
          <input type="radio" id="star4" name="rate" value="4" />
          <label for="star4" title="text">4 stars</label>
          <input type="radio" id="star3" name="rate" value="3" />
          <label for="star3" title="text">3 stars</label>
          <input type="radio" id="star2" name="rate" value="2" />
          <label for="star2" title="text">2 stars</label>
          <input type="radio" id="star1" name="rate" value="1" />
          <label for="star1" title="text">1 star</label>
        </div>
      )
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
              <input id="file-input" disabled={!isHolderAccount} onChange={handleChangeImage} type="file" className='Avatar-input'/>
            </div>
          <div className='user_name'>
                       {values.username}
          </div>
          {values.user_type === "tutor" &&
          <div className='col'>
            <div className='tutor-literacy'>{"Trình độ: " + values.literacy + " " + values.major}</div>
            <div className='tutor-voting'>{"Đánh giá: " + (!values.voting?"5":values.voting) + ' '} <div style={{color: '#ffc700', fontSize: '30px',marginTop: '-12px'}}> ★ </div> {  " (" + (!values.evaluate?"0":values.evaluate) + " bài đánh giá)"}</div>
            <div className='tutor-dayreg'>{"Ngày tham gia: " + "15/01/2022"}</div>
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
          {<ButtonConnect/>}
        </div>
        {/* {pics.map((pic) => {
        return (
          <div style={{ marginBottom: "100px" }}>
            {pic.id}
            <img
              src={pic.imgUrl}
              width="100px"
              height="100px"
              alt="placeholder grey 100px"
            />
            <button onClick={() => removeImage(pic.id)}>X</button>
          </div>
        );
      })} */}
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
          { values.user_type==="tutor" && 
          <div className='row'>
            <div className='info-user'>
              <img src={subject} className='icon-img'/>{
              "Môn học nhận dạy: " + values.subjects.map(v=>(
                v + ' '
              ))}
            </div>
          </div>
          }
          { values.user_type==="tutor" && 
          <div className='row'>
            <div className='info-user'>
              <img src={classImg} className='icon-img'/>{
              "Lớp nhận dạy: " + values.classes.map(v=>(
                v + ' '
              ))
              }
            </div>
          </div>
          }
          <div className='row'>
            <div className='intro-label'>
            <strong>
              Thông tin tự giới thiệu
            </strong>
            </div>
          </div>
          <div className='intro-user'>
            {values.introduce}
          </div>
          { values.user_type==="tutor" &&
          <div className='row'>
            <div className='tutor-cert-img'>
            <strong>
              Hình ảnh các văn bằng
            </strong>
            </div>
            <div class="scroll-container">
              {pics.map((pic) => {
                return (
                  <div className='scroll-page'>
                  <div>
                    {/* {pic.id} */}
                    <img
                      src={values.image}
                      className="img-cert"
                    />
                    </div>
                    { isHolderAccount &&
                    <div style={{marginTop: "-40px"}}>
                    <button className="remove-cert-btn" onClick={() => removeImage(pic.id)}>
                      <div className='remove-btn-text-553'>
                        Xóa ảnh
                      </div>
                    </button>
                    </div>
                    }
                  </div>
                );
                })} 
              {/* <div class="scroll-page" id="page-1">
                <img className='img-cert ' src={values.image}/>
              </div>
              <div class="scroll-page" id="page-1">
                <img className='img-cert ' src={values.image}/>
              </div>
              <div class="scroll-page" id="page-1">
                <img className='img-cert ' src={values.image}/>
              </div>
              <div class="scroll-page" id="page-1">
                <img className='img-cert ' src={values.image}/>
              </div> */}
             
            </div>
            { isHolderAccount &&
            <div className='pos-add-btn-553'>
            <label for="input-cert">
                  <div className='add-cert-btn-553'> 
                    Thêm ảnh
                  </div> 
                </label>
            <input id="input-cert" 
                required={true}
                onChange={handleChangeCert}
                type="file" 
                style={{display: 'none'}}
                accept=".jpg, .jpeg, .png"
                multiple />
              {/* <button className='add-cert-btn-553' onClick={handleChangeCert}>Thêm ảnh</button> */}
            </div>
            }
          </div>
                  
          }
          <div className='row'>
            <div className='tutor-cert-img' style={{width:"400px"}}>
            <strong>
              Danh sách các bài đã đăng
            </strong>
            </div>
            {/* <div>{listPost}</div> */}
            <PostList />
          </div>
          { isHolderAccount &&
          <div className='row'>
            <div className='tutor-cert-img' style={{width: '400px'}}>
            <strong>
              Danh sách các yêu cầu kết nối
            </strong>
            </div>
            <RequestListConnect/>
          </div>
          }
        </div>
        
        <div style={{marginTop: '2%'}}>
          <Footer/>
        </div>
      </div>
      )
}

export default Profile;