import logo from '../images/logo.png';
import background from '../images/background.png';
import toprightimage from '../images/topRight.png';
import bottomrightimage from '../images/bottomRight.png';
import './EditProfileTutor.css';
import {Form, Button} from 'react-bootstrap';
import Navbar from '../Navbar';
import Footer from '../Footer';
import validateInfo from './validateInfo';
import useForm from './useForm';
import 'bootstrap/dist/css/bootstrap.css';
import {MultiSelect} from "react-multi-select-component";
import React, { Component, useState } from "react";

function EditProfileTutor(){
  const submitForm = () => {
    console.log("Submitted");
  }
  const { handleChange, handleSubmit, subjectChange, classesChange, salaryChange, handleChangeCert,
    subjectLabel, classesLabel
    , values, errors } = useForm(
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
      { label: "Lớp 1", value: "Lớp 1" },
      { label: "Lớp 2", value: "Lớp 2" },
      { label: "Lớp 3", value: "Lớp 3" },
      { label: "Lớp 4", value: "Lớp 4" },
      { label: "Lớp 5", value: "Lớp 5" },
      { label: "Lớp 6", value: "Lớp 6" },
      { label: "Lớp 7", value: "Lớp 7" },
      { label: "Lớp 8", value: "Lớp 8" },
      { label: "Lớp 9", value: "Lớp 9" },
      { label: "Lớp 10", value: "Lớp 10" },
      { label: "Lớp 11", value: "Lớp 11" },
      { label: "Lớp 12", value: "Lớp 12" },
    ],
    subject: [
      { label: "Toán", value: "Toán" },
      { label: "Lý", value: "Lý" },
      { label: "Hóa", value: "Hóa" },
      { label: "Sinh", value: "Sinh" },
      { label: "Văn", value: "Văn" },
      { label: "Sử", value: "Sử" },
      { label: "Địa", value: "Địa" },
      { label: "Anh", value: "Anh" },
      { label: "KHTN", value: "KHTN" },
      { label: "KHXH", value: "KHXH" }
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
        <img src={toprightimage} 
          className='top-right-image'/>
        <Form className='d-flex'>
          <Form.Group controlId="formFile" className="mb-3" >
            <div className='Avatar-tutor'>
              <label for="file-input">
                  <img src={values.image} className='Avatar_label'/>
              </label> {/*onChange={handleChangeImage}*/}
              <input id="file-input" type="file"  className='Avatar-input'/>
            </div>
            <div type='text' 
              className="user_type_user" 
              disabled>
                {values.user_type === "student"? "Học viên": "Gia sư"}
            </div>
          </Form.Group>
          <Form.Group>
            <div type='text' className="user_name_user" id='username' disabled>
               {values.username}
            </div>
            <div className='label_intro_user'>
              Giới thiệu về bản thân bạn
            </div>
            <Form.Control type='text' 
            value={values.introduce}
            onChange={handleChange}
            name='introduce'
            placeholder='Giới thiệu ngắn gọn về bản thân bạn' 
            className='intro-control'>
            </Form.Control>
            <div className='input-label'>
               Họ và tên
            </div>
            <Form.Control type='text' 
            placeholder='Nhập họ và tên' 
            className='username_control'
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
            <div className='input-label'>
               Chuyên ngành
            </div>
            <Form.Control type='text' 
            placeholder='Nhập chuyên ngành của bạn' 
            className='major-control'
            value={values.major}
            name='major'
            onChange={handleChange}>
            </Form.Control>
            <div className='input-label'>
               Mức lương
            </div>
            <Form.Control type='text'
              placeholder='Mức lương bạn mong muốn' 
              name='fee'
              onChange={salaryChange}
              value={values.fee}
              className='salary_control'>
            </Form.Control>
            <div className='input-label'>
              Địa chỉ
            </div>
            <Form.Control type='text'
            placeholder='Nhập thông tin địa chỉ nơi bạn ở' 
            className='address-control'
            name='address'
            value={values.address}
            onChange={handleChange}>
            </Form.Control>
            <div className='input-label'>
              Email
            </div>
            <Form.Control type='email' 
              placeholder='example@gmail.com' 
              className='email_control'
              name='email'
              value={values.email}
              onChange={handleChange}>
            </Form.Control>
            <div className='input-label'>
              Thông tin liên lạc khác
            </div>
            <Form.Control type='text'
            placeholder='Số điện thoại, link facebook, ...' 
            className='other-info-control'
            name='contact'
            value={values.contact}
            onChange={handleChange}>
            </Form.Control>
            <div className='input-label'>
              Cập nhật thông tin bằng cấp
            </div>
            <div className='cert-input'>
                <label for="input-cert">
                  <div className='cert-label'> 
                    Cập nhật thông tin bằng cấp, chứng chỉ
                  </div> 
                </label>
              <input id="input-cert" 
                required={true}
                onChange={handleChangeCert}
                type="file" 
                style={{display: 'none'}}
                accept=".jpg, .jpeg, .png"
                multiple />
            </div>
            <button 
              className='submit-btn-553' 
              type="submit"
              onClick={handleSubmit}>
              Gửi
            </button>
            <div 
              className='cancel-btn'>
              <a style={{textDecoration: 'none'}} href={'/profile/' + values.username}> Hủy </a>
            </div>
          </Form.Group>
          <Form.Group>
            <div className='birth-day-label' >
              Ngày tháng năm sinh
            </div>
            <Form.Control required controlId="duedate" 
              className='birth-day-select'
              onChange={handleChange}
              type="date"
              name="birthday"
              value={values.birthday}
              placeholder="Due date"
            />
            <div className='option-secure-label'>
              Trình độ
            </div>
            <div>
              <select id="gender" 
                className='level_select'
                name='literacy'
                value={values.literacy}
                onChange={handleChange}>
                {optionLevel}
              </select>
            </div>
            <div className='class-select-label'>
              Lớp bạn có thể dạy
            </div>
            <MultiSelect
              options={optionSelect.options}
              value={classesLabel}
              name='classes'
              onChange={classesChange}
              labelledBy="Lớp"
              className='option-multiple-select'
            />
            <div className='class-select-label'>
              Môn bạn có thể dạy
            </div>
            <MultiSelect
              options={optionSelect.subject}
              value={subjectLabel}
              name='classes'
              onChange={subjectChange}
              labelledBy="Lớp"
              className='option-multiple-select'
            />
            <div className='option-secure-label'>
               Trạng thái
            </div>
            <div>
            <select id="gender" className='option-secure-select'
              name='address_secure'
              value={values.address_secure}
              onChange={handleChange}>
              {optionSecure}
            </select>
            </div>
            <div className='option-secure-label'>
              Trạng thái
            </div>
            <div>
            <select id="gender" 
              className='option-secure-select'
              name='email_secure'
              value={values.email_secure}
              onChange={handleChange}>
              {optionSecure}
            </select>
            </div>
            <div className='option-secure-label'>
              Trạng thái
            </div>
            <div>
            <select id="gender" className='option-secure-select'
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

export default EditProfileTutor;
