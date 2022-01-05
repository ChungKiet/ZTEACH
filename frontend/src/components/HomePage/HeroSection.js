import React from 'react';
import '../../App.css';
//import { Button } from './Button';
import './HeroSection.css';
import banner from '../images/banner.png';
import aboutus from '../images/aboutus.png';
import GlobalVar from '../../GlobalVar';
import { Link } from 'react-router-dom';
function HeroSection() {
  return (
    <div>
    <div className='hero-container'>
      <img className='img-18' src={banner} width="1000px" height = "700px"/>
      <div className='row-div'>
        <button className='button-18'>Danh sách bài đăng</button>
        <button className='button-18'>Danh sách gia sư</button>
        {GlobalVar.isLogin && <Link to="/new-post" className="link446"><button className='button-17'>Đăng bài tìm gia sư</button></Link>}
      </div>
    </div>
    <img src={aboutus} width="1920px"/>
    </div>
  );
}

export default HeroSection;
