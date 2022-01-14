import logo from '../images/logo.png';
import background from '../images/background.png';
import toprightimage from '../images/topRight.png';
import bottomrightimage from '../images/bottomRight.png';
import './EditProfileTutor.css';
import {Form, Button} from 'react-bootstrap';
import Navbar from '../Navbar';
import Footer from '../Footer';
import 'bootstrap/dist/css/bootstrap.css';
import {MultiSelect} from "react-multi-select-component";
import validateInfo from './validateInfo';
import useForm from './useForm';
import React, { Component, useState } from "react";

function EditProfile(){
  const submitForm = () => {
    console.log("Submitted");
  }

  const { handleChange, handleSubmit, classesChange, values, errors } = useForm(
      submitForm,
      validateInfo
  );

  const optionSelect = {
    gender: [
      { name: 'Nam', id: "Nam" },
      { name: 'Nữ', id: "Nữ" },
      { name: 'Khác', id: "Khác" }
    ],
    secure: [
      { name: 'Riêng tư', id: 'Riêng tư' },
      { name: 'Bảo mật', id: 'Bảo mật' },
      { name: 'Công khai', id: 'Công khai' }
    ],
    level: [
      { name: "Sinh viên", id: "Sinh viên"},
      { name: "Giảng viên", id: "Giảng viên"}
    ],
    options: [
      { label: "Lớp 1", value: "1" },
      { label: "Lớp 2", value: "2" },
      { label: "Lớp 3", value: "3" },
      { label: "Lớp 4", value: "4" },
      { label: "Lớp 5", value: "5" },
      { label: "Lớp 6", value: "6" },
      { label: "Lớp 7", value: "7" },
      { label: "Lớp 8", value: "8" },
      { label: "Lớp 9", value: "9" },
      { label: "Lớp 10", value: "10" },
      { label: "Lớp 11", value: "11" },
      { label: "Lớp 12", value: "12" },
    ],
  }
  
    let optionGender = optionSelect.gender.map(v => (
      <option value={v.id}>{v.name}</option>
    ));

    let optionLevel = optionSelect.level.map(v => (
      <option value={v.id}>{v.name}</option>
    ));

    let optionSecure = optionSelect.secure.map(v => (
      <option value={v.id}>{v.name}</option>
    ));

    return (
      <div className="EditProfile" style={{
        backgroundImage: `url(${background})` ,
     }}>
        <Navbar/>
        <img src={toprightimage} className='top-right-image'/>
        <Form className='d-flex' onSubmit={handleSubmit}>
          <Form.Group controlId="formFile">
            <div class="image-upload" className='Avatar'>
              <label for="file-input">
                  <img src={values.image} className='Avatar-student'/>
              </label>
              <input id="file-input" type="file" className='Avatar-input'/>
            </div>
            <div type='text' className="user_type_student" 
            disabled>{values.user_type}
            </div>
          </Form.Group>
          <Form.Group>
            <div type='text' className="user_name_student" id='username' disabled>
               {values.username}
            </div>
            <div className='label_intro_student'>
              Giới thiệu về bản thân bạn
            </div>
            <Form.Control type='text' 
            value={values.introduce}
            onChange={handleChange}
            name='introduce'
            placeholder='Giới thiệu ngắn gọn về bản thân bạn' 
            className='intro-student-control'>
            </Form.Control>
            <div className='input-label'>
               Họ và tên
            </div>
            <Form.Control type='text' 
            placeholder='Nhập họ và tên' 
            className='username-control'
            value={values.name}
            name='name'
            onChange={handleChange}>
            </Form.Control>
            <div className='gender-secure-label'>
               Giới tính
            </div>
            <div >
               <select id="gender" 
               className='option-gender'
               name='gender'
               value={values.gender}
               onChange={handleChange}>
               {optionGender}
               </select>
            </div>
            <div className='birth-student' >
              Ngày tháng năm sinh
            </div>
            <Form.Control required controlId="duedate" 
              className='birth-day-student-select'
              onChange={handleChange}
              type="date"
              name="birthday"
              value={values.birthday}
              placeholder="Due date"
            />
            <div className='input-label'>
              Địa chỉ
            </div>
            <Form.Control type='text'
            placeholder='Nhập thông tin địa chỉ nơi bạn ở' 
            className='address-student-control'
            name='address'
            value={values.address}
            onChange={handleChange}>
            </Form.Control>
            <div className='input-label'>
              Email
            </div>
            <Form.Control type='email' placeholder='example@gmail.com' 
              className='email-student-control'
              name='email'
              value={values.email}
              onChange={handleChange}>
            </Form.Control>
            <div className='input-label'>
              Thông tin liên lạc khác
            </div>
            <Form.Control type='text'
            placeholder='Số điện thoại, link facebook, ...' 
            className='other-info-student-control'
            name='contact'
            value={values.contact}
            onChange={handleChange}>
            </Form.Control>
            <button variant="warning" 
              className='student-submit-btn' type="submit"
              onClick={handleSubmit}>
              Gửi
            </button>
            <button variant="dark" className='student-cancel-btn'>
              Hủy
            </button>
          </Form.Group>
          <Form.Group>
            <button variant="warning" className='update-to-tutor-btn'>
              <a href='/register-tutor'>Đăng ký làm gia sư</a>
            </button>
            <div className='first_secure_label'>
               Trạng thái
            </div>
            <div>
            <select id="gender" 
              className='option_secure_student_select'
              name='gender_secure'
              value={values.gender_secure}
              onChange={handleChange}>
              {optionSecure}
            </select>
            </div>
            <div className='option_secure_student_label'>
              Trạng thái
            </div>
            <div>
            <select id="gender" 
              className='option_secure_student_select'
              name='birthday_secure'
              value={values.birthday_secure}
              onChange={handleChange}>
              {optionSecure}
            </select>
            </div>
            <div className='option_secure_student_label'>
              Trạng thái
            </div>
            <div>
            <select id="gender" 
              className='option_secure_student_select'
              name='address_secure'
              value={values.address_secure}
              onChange={handleChange}>
              {optionSecure}
            </select>
            </div>
            <div className='option_secure_student_label'>
              Trạng thái
            </div>
            <div>
            <select id="gender" 
              className='option_secure_student_select'
              name='email_secure'
              value={values.email_secure}
              onChange={handleChange}>
              {optionSecure}
            </select>
            </div>
            <div className='option_secure_student_label'>
              Trạng thái
            </div>
            <div>
            <select id="gender" 
              className='option_secure_student_select'
              name='contact_secure'
              value={values.contact_secure}
              onChange={handleChange}>
              {optionSecure}
            </select>
            </div>
          </Form.Group>
        </Form>
        <img src={bottomrightimage} className='bottom-right-image'/>
        
        <div style={{ marginTop: "10%",marginBottom:"0", bottom: "0", width: '100%' }}>
          <Footer/>
        </div>
      </div>
      )
}

export default EditProfile;
