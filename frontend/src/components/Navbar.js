import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './images/logo.png';
import Profile from './Profile';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  //const {user, setUser} = useContext(UserContext);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const tmp = window.sessionStorage.getItem("user19120000");
  const user = JSON.parse(tmp); 
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
      <nav className='navbar447'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo1' onClick={closeMobileMenu}>
            <img class="logo" className="logo" src={logo} height="40px" width="40px"/>
            ZTEACH
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          {(user === null) && (<div className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item447'>
              <Link
                to='/login'
                className='nav-links447'
                onClick={closeMobileMenu}
              >
                ĐĂNG NHẬP
              </Link>
            </li>
          </div>)}
          {(user === null) && button && <Link to="/signup"><Button buttonStyle='btn--outline1'>ĐĂNG KÝ</Button></Link>}
          {(user !== null) && <Profile/>}
        </div>
      </nav>
  );
}

export default Navbar;
