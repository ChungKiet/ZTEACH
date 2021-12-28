import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './images/logo.png';
import Profile from './Profile';
import GlobalVar from '../GlobalVar';
function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar447'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo1' onClick={closeMobileMenu}>
            <img class="logo" src={logo} height="40px" width="40px"/>
            ZTEACH
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          {!GlobalVar.isLogin && (<ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link
                to='/login'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                ĐĂNG NHẬP
              </Link>
            </li>
          </ul>)}
          {!GlobalVar.isLogin && button && <Link to="/signup"><Button buttonStyle='btn--outline1'>ĐĂNG KÝ</Button></Link>}
          {GlobalVar.isLogin && <Profile/>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
