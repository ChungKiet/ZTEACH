import React from 'react'
import './NewPost.css';
import { Link } from 'react-router-dom';
import NewPostForm from './NewPostForm'
import logo from '../images/logo.png';
function NewPost() {
    return (
        <div className='bg2'>
            <Link to='/' className='navbar-logo'>
                <img src={logo} class='logo' height="40px" width="40px"/>
                ZTEACH
            </Link>
            <NewPostForm/>
        </div>
        
    )
}

export default NewPost
