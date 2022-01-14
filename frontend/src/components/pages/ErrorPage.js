import React from 'react'
import {Link} from 'react-router-dom'

function ErrorPage() {
    return (
        <div>
            <h3>Page not found</h3>
            <br/>
            <Link to='/'><button>Về trang chủ</button></Link>
        </div>
    )
}

export default ErrorPage
