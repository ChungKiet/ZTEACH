import background from '../images/background.png';
import toprightimage from '../images/topRight.png';
import bottomrightimage from '../images/bottomRight.png';
import './TutorRegister.css';
import {Form, Button} from 'react-bootstrap';
import Navbar from '../Navbar';
import Footer from '../Footer';
import 'bootstrap/dist/css/bootstrap.css';
import {MultiSelect} from "react-multi-select-component";
import React, { Component, useState } from "react";
import validateInfo from './validateInfo';
import useForm from './useForm';

function TutorRegister(){
  const submitForm = () => {
    console.log("Submitted");
  }
  const { handleChange, handleSubmit, classesChange, salaryChange, handleChangeImage, handleChangeCert, classesLabel, values, errors } = useForm(
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
      { name: "Giáo viên", id: "Giáo viên"}
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
      <div className="TutorRegister" style={{
        backgroundImage: `url(${background})` ,
     }}>
        <Navbar/>
        <img src={toprightimage} 
          className='top-right-image'/>
        <Form className='d-flex' onSubmit={handleSubmit}>
          <Form.Group controlId="formFile" className="mb-3" >
            <div className='Avatar-tutor'>
              <label for="file-input">
                  <img src={values.image} className='Avatar_label'/>
              </label>
              <input id="file-input" type="file" onChange={handleChangeImage} className='Avatar-input'/>
            </div>
            <div type='text' 
              className="user_type_reg" 
              disabled>
                Học viên
            </div>
          </Form.Group>
          <Form.Group>
            <div type='text' className="user_name_reg" id='username' disabled>
               {values.username}
            </div>
            <div className='label_intro'>
              Giới thiệu về bản thân bạn
            </div>
            <Form.Control type='text' 
            value={values.introduce}
            onChange={handleChange}
            name='intro'
            placeholder='Giới thiệu ngắn gọn về bản thân bạn' 
            className='intro-control'>
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
            className='address_control'
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
            <Button 
              variant="warning" 
              className='submit-btn' 
              type="submit">
              Submit
            </Button>
            <Button 
              variant="dark" 
              className='cancal-btn'>
              Hủy
            </Button>
          </Form.Group>
          <Form.Group>
            <div className='birthDay' >
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
            {/* <ClassDropdown/> */}
            <MultiSelect
              options={optionSelect.options}
              value={classesLabel}
              name='classes'
              onChange={classesChange}
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

export default TutorRegister;
