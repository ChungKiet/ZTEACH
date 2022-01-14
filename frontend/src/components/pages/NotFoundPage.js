import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from '../Navbar';

function NotFoundPage() {
    return (
        <div>
            <Navbar/>
            <h3>Page not found</h3>
            <br/>
            <Link to='/'><button>Về trang chủ</button></Link>
        </div>
    )
}

export default NotFoundPage
