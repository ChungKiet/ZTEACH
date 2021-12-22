import React from 'react'
import './Signup.css';
import { Link } from 'react-router-dom';
import Form from './Form'
import logo from '../images/logo.png';
function Signup() {
    return (
        <div className='bg2'>
            <Link to='/' className='navbar-logo'>
                <img src={logo} class='logo' height="40px" width="40px"/>
                ZTEACH
            </Link>
            <Form/>
        </div>
        
    )
}

export default Signup
