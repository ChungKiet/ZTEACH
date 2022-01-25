import React from 'react';
import './Footer.css';
//import { Button } from './Button';
import { Link } from 'react-router-dom';
import logo from './images/logo.png';

function Footer() {
  return (
    <div className='footer-container'>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              <img class="logo" className="logo" src={logo} height="40px" width="40px"/>
              ZTEACH
            </Link>
          </div>
          <small class='website-rights'>ZTEAM</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
