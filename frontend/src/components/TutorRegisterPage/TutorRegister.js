import logo from '../images/logo.png';
import background from '../images/background.png';
import toprightimage from '../images/topRight.png';
import bottomrightimage from '../images/bottomRight.png';
import './TutorRegister.css';
import {Form, Button} from 'react-bootstrap';
import Navbar from '../Navbar';
import Footer from '../Footer';
// import ClassDropdown from './ClassDropDown';
import 'bootstrap/dist/css/bootstrap.css';
import {MultiSelect} from "react-multi-select-component";
// import Container from 'react-bootstrap/Container';
// import { LinkContainer } from 'react-router-bootstrap';
import React, { Component, useState } from "react";
// import { axios } from 'axios';
// import { CheckBoxSelection, Inject, MultiSelectComponent } from '@syncfusion/ej2-react-dropdowns';

var ReactDOM = require('react-dom');

class TutorRegister extends Component {
   state = {
      username: "KietChung",
      intro: "No intro",
      name: "",
      user_type: "Học viên",
      gender: {
        value: "Nam",
        secure: "Công khai"
      },
      date: {
        value: "",
        secure: "Riêng tư"
      },
      classSelect: [],
      major: "",
      level: "",
      salary: "",
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
      // checkboxStyle : {
      //   display: 'none',
      //   border: '1px #8DF5E4 solid'
      // }
    };
  
    optionSelect = {
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
  
    updateGender = (textChange) => {
      // Creating a dummy object using spread operator
      var gender = { ...this.state.gender }
    
      // Updating the city
      gender.value = textChange;
      this.setState({ gender })
    }
  
    updateBirthDay = (textChange) => {
      // Creating a dummy object using spread operator
      var date = { ...this.state.date }
    
      // Updating the city
      date.value = textChange;
      this.setState({ date })
    }
  
    updateAddress = (textChange) => {
      // Creating a dummy object using spread operator
      var address = { ...this.state.address }
    
      // Updating the city
      address.value = textChange;
      this.setState({ address })
    }
  
    updateAddressSecure = (textChange) => {
      // Creating a dummy object using spread operator
      var address = { ...this.state.address }
    
      // Updating the city
      address.secure = textChange;
      this.setState({ address })
    }
  
    updateEmail = (textChange) => {
      // Creating a dummy object using spread operator
      var email = { ...this.state.email }
    
      // Updating the city
      email.value = textChange;
      this.setState({ email })
    }
  
    updateEmailSecure = (textChange) => {
      // Creating a dummy object using spread operator
      var email = { ...this.state.email }
    
      // Updating the city
      email.secure = textChange;
      this.setState({ email })
    }
  
    updateOtherInfo = (textChange) => {
      // Creating a dummy object using spread operator
      var otherInfo = { ...this.state.phone }
    
      // Updating the city
      otherInfo.value = textChange;
      this.setState({ otherInfo })
    }
  
    updateOtherInfoSecure = (textChange) => {
      // Creating a dummy object using spread operator
      var otherInfo = { ...this.state.phone }
    
      // Updating the city
      otherInfo.secure = textChange;
      this.setState({ otherInfo })
    }

  // sendInfo = () =>{
  //   // Check and post data by user_name
  //   // Neu doi username --> Check truoc trung ten
    
  //   console.log(this.state.username);
  //   return {};
  // };
  
  render() {
   let optionGender = this.optionSelect.gender.map(v => (
      <option value={v.id}>{v.name}</option>
    ));

    let optionLevel = this.optionSelect.level.map(v => (
      <option value={v.id}>{v.name}</option>
    ));

    let optionSecure = this.optionSelect.secure.map(v => (
      <option value={v.id}>{v.name}</option>
    ));

    return (
      <div className="TutorRegister" style={{
        backgroundImage: `url(${background})` ,
     }}>
        <Navbar/>
        <img src={toprightimage} className='top-right-image'/>
        <Form className='d-flex'>
          <Form.Group controlId="formFile" className="mb-3" >
            <div class="image-upload" className='AvatarTest'>
              <label for="file-input">
                  <img src={logo} className='Avatar_label'/>
              </label>
              <input id="file-input" type="file" className='Avatar-input'/>
            </div>
            <div type='text' className="user_type" 
            disabled>{this.state.user_type}
            </div>
          </Form.Group>
          <Form.Group>
            <div type='text' className="user_name" id='username' disabled>
               {this.state.username}
            </div>
            <div className='label-intro'>
              Giới thiệu về bản thân bạn
            </div>
            <Form.Control type='text' 
            value={this.state.intro}
            onChange={e => this.setState({intro: e.target.value})}
            placeholder='Giới thiệu ngắn gọn về bản thân bạn' 
            className='intro-control'>
            </Form.Control>
            <div className='input-label'>
               Họ và tên
            </div>
            <Form.Control type='text' placeholder='Nhập họ và tên' 
            className='username-control'
            value={this.state.name}
            onChange={e => this.setState({name: e.target.value})}>
            </Form.Control>
            <div className='gender-secure-label'>
               Giới tính
            </div>
            <div >
               <select id="gender" 
               className='option-gender'
               onChange={e => this.updateGender(e.target.value)}>
               {optionGender}
               </select>
            </div>
            <div className='input-label'>
               Chuyên ngành
            </div>
            <Form.Control type='text' placeholder='Nhập chuyên ngành của bạn' 
            className='major-control'
            onChange={e => this.setState({major: e.target.value})}>
            </Form.Control>
            <div className='input-label'>
              Địa chỉ
            </div>
            <Form.Control type='text'
            placeholder='Nhập thông tin địa chỉ nơi bạn ở' 
            className='address-control'
            onChange={e => this.updateAddress(e.target.value)}>
            </Form.Control>
            <div className='input-label'>
              Email
            </div>
            <Form.Control type='email' placeholder='example@gmail.com' 
              className='email_control'
              onChange={e => this.updateEmail(e.target.value)}>
            </Form.Control>
            <div className='input-label'>
              Thông tin liên lạc khác
            </div>
            <Form.Control type='text'
            placeholder='Số điện thoại, link facebook, ...' 
            className='other-info-control'
            onChange={e => this.updateOtherInfo(e.target.value)}>
            </Form.Control>
            <div className='input-label'>
              Cập nhật thông tin bằng cấp
            </div>
            <div className='cert-input'>
                <label for="file-input">
                  <div className='cert-label'> 
                    Cập nhật thông tin bằng cấp, chứng chỉ
                  </div> 
                </label>
              <input id="file-input" type="file" accept=".png,.jpg,.jpeg" multiple style={{display: 'none'}}/>
            </div>
            <Button variant="warning" className='submit-btn' type="submit">
              Submit
            </Button>
            <Button variant="dark" className='cancal-btn'>
              Hủy
            </Button>
          </Form.Group>
          <Form.Group>
            <div className='birthDay' >
              Ngày tháng năm sinh
            </div>
            <Form.Control required controlId="duedate" className='birth-day-select'
              onChange={(e) => this.updateBirthDay(e.target.value)}
              type="date"
              name="duedate"
              placeholder="Due date"
            />
            <div className='option-secure-label'>
              Trình độ
            </div>
            <div>
              <select id="gender" className='level_select'
                onChange={e => this.setState({level: e.target.value})}>
                {optionLevel}
              </select>
            </div>
            <div className='option-secure-label'>
               Trạng thái
            </div>
            <div>
            <select id="gender" className='option-secure-select'
              onChange={e => this.updateGenderSecure(e.target.value)}>
              {optionSecure}
            </select>
            </div>
            <div className='option-secure-label'>
              Trạng thái
            </div>
            <div>
            <select id="gender" 
              className='option-secure-select'
              onChange={e => this.updateGenderSecure(e.target.value)}>
              {optionSecure}
            </select>
            </div>
            <div className='option-secure-label'>
              Trạng thái
            </div>
            <div>
            <select id="gender" className='option-secure-select'
              onChange={e => this.updateGenderSecure(e.target.value)}>
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
      );
  }
}

export default TutorRegister;
