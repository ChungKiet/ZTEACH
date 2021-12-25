import logo from '../images/logo.png';
import background from '../images/background.png';
import toprightimage from '../images/topRight.png';
import bottomrightimage from '../images/bottomRight.png';
import './EditProfile.css';
import {Form, Button} from 'react-bootstrap';
import Navbar from '../Navbar';
import Footer from '../Footer';
import 'bootstrap/dist/css/bootstrap.css';
import React, { Component, useState } from "react";
// import { axios } from 'axios';

class EditProfile extends Component {
  state = {
    username: "KietChung",
    intro: "No intro",
    name: "",
    user_type: "Học viên",
    gender: {
      value: "Nam",
      secure: "Riêng tư"
    },
    date: {
      value: "2001-01-09T17:00:00.000Z",
      secure: "Riêng tư"
    },
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
  }

  updateGender = (textChange) => {
    // Creating a dummy object using spread operator
    var gender = { ...this.state.gender }
  
    // Updating the city
    gender.value = textChange;
    this.setState({ gender })
  }

  updateGenderSecure = (textChange) => {
    // Creating a dummy object using spread operator
    var gender = { ...this.state.gender }
  
    // Updating the city
    gender.secure = textChange;
    this.setState({ gender })
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

    let optionSecure = this.optionSelect.secure.map(v => (
      <option value={v.id}>{v.name}</option>
    ));

    return (
      <div className="EditProfile" style={{
        backgroundImage: `url(${background})` ,
     }}>
        <Navbar/>
        <img src={toprightimage} style={{position: 'absolute', right:'0', width:'200px'}}/>
        <Form className='d-flex'>
          <Form.Group controlId="formFile" className="mb-3" >
            <div class="image-upload" className='Avatar'>
              <label for="file-input">
                  <img src={logo} className='Avatar-label'/>
              </label>
              <input id="file-input" type="file" className='Avatar-input'/>
            </div>
            <div type='text' className="user_type" 
            disabled>{this.state.user_type}
            </div>
          </Form.Group>
          <Form.Group>
            <div type='text' className="user_name" id='username' disabled 
            >{this.state.username}
            </div>
            <div className='label-intro'>
              Giới thiệu về bản thân bạn
            </div>
            <Form.Control type='text' className="mb-3" id="introduction" 
            value={this.state.intro}
            onChange={e => this.setState({ intro: e.target.value })}
            placeholder='Giới thiệu ngắn gọn về bản thân bạn' 
            style={{width: '550px',
              height: '40px',
              borderRadius: '3%',
              marginLeft: '45px',
              boxShadow: "1px 3px 1px #9E9E9E",
              hint:'sdfsf'
              }}>
            </Form.Control>
            <div className='input-label'>
              Họ và tên
            </div>
            <Form.Control type='text' className="mb-3" id="name" 
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
            placeholder='Nhập họ và tên' 
            style={{width: '320px',
              height: '40px',
              borderRadius: '3%',
              marginLeft: '45px',
              boxShadow: "1px 3px 1px #9E9E9E"
              }}>
            </Form.Control>
            <div className='input-label'>
              Giới tính
            </div>
            <div >
            <select id="gender" 
              className='gender'
            onChange={e => this.updateGender(e.target.value)}>
              {optionGender}
            </select>
            </div>
            <div id="dateofbirth" className='input-label'>
              Ngày tháng năm sinh
            </div>
            <Form.Control controlId="duedate" 
               style={{
                  marginLeft: '45px', 
                  width:"200px",
                  marginBottom: '15px',
               }}
               type="date"
               name="duedate"
               placeholder="Due date"
               value={this.state.date}
               onChange={(e) => this.updateBirthDay(e.target.value)}
            />
            <div className='input-label'>
               Địa chỉ
            </div>
            <Form.Control type='text' id="address" className="mb-3" 
            value={this.state.address.value}
            onChange={e => this.updateAddress(e.target.value)}
            placeholder='Nhập thông tin địa chỉ nơi bạn ở' 
            style={{width: '320px',
               height: '40px',
               borderRadius: '3%',
               marginLeft: '45px',
               boxShadow: "1px 3px 1px #9E9E9E"
               }}>
            </Form.Control>
            <div className='input-label'>
               Email
            </div>
            <Form.Control type='email' id="email" className="mb-3" 
            value={this.state.email.value}
            onChange={e => this.updateEmail(e.target.value)}
            placeholder='example@gmail.com' 
            style={{width: '320px',
               height: '40px',
               borderRadius: '3%',
               marginLeft: '45px',
               boxShadow: "1px 3px 1px #9E9E9E"
               }}>
            </Form.Control>
            <div className='input-label'>
               Thông tin liên lạc khác
            </div>
            <Form.Control id="otherinfo"
            type='text' className="mb-3"
            value={this.state.phone.value}
            onChange={e => this.updateOtherInfo(e.target.value)}
            placeholder='Số điện thoại, link facebook, ...' 
            style={{width: '320px',
               height: '40px',
               borderRadius: '3%',
               marginLeft: '45px',
               boxShadow: "1px 3px 1px #9E9E9E"
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
               marginLeft: "-100px",
               borderRadius: '3%',
               marginLeft: '75px',
               boxShadow: "1px 3px 1px #9E9E9E"
               }}>
               Hủy
            </Button>
         </Form.Group>
            <button className='updateToTutor'> 
               Đăng kí làm gia sư
            </button>
         <Form.Group>
            <div className='gender_secure'>
               Trạng thái
            </div>
            <div>
            <select id="gender" 
               className='secure-select'
               onChange={e => this.updateGenderSecure(e.target.value)}>
               {optionSecure}
            </select>
            </div>
            <div className='secure-label'>
               Trạng thái
            </div>
            <div>
              <select id="gender" 
                className='secure-select'
              onChange={this.handleChange}>
                {optionSecure}
              </select>
            </div>
            <div className='secure-label'>
               Trạng thái
            </div>
            <div>
              <select id="gender" 
                className='secure-select'
              onChange={this.handleChange}>
                {optionSecure}
              </select>
            </div>
            <div className='secure-label'>
               Trạng thái
            </div>
            <div>
              <select id="gender" 
                className='secure-select'
              onChange={this.handleChange}>
                {optionSecure}
              </select>
            </div>
            <div className='secure-label'>
               Trạng thái
            </div>
            <div>
              <select id="gender" 
                className='secure-select'
              onChange={this.handleChange}>
                {optionSecure}
              </select>
            </div>
            
          </Form.Group>
          
        </Form>
        <img src={bottomrightimage} style={{position: "absolute", right:"0", width:'200px'}}/>
        <div style={{marginTop: "150px", marginBottom: "0px", bottom: "0"}}>
          <Footer/>
        </div>
      </div>
      );
  }
}

export default EditProfile;
