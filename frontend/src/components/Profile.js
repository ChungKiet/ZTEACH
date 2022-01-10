import React from 'react';
import './Profile.css';
import profile from './images/profile.png';
import GlobalVar from '../GlobalVar';
import { Link } from 'react-router-dom';
class Profile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            onClick: false
        };
        this.ClickListener=this.ClickListener.bind(this);
    }
    ClickListener(){
        this.setState({onClick: !this.state.onClick});
    }
    render(){
    return (
          <div class="action">
            <div class="profile447" onClick={this.ClickListener}>
                <img src={profile}/>
            </div>
            {this.state.onClick && (<div class="menu447">
                <h3>Lan Anh</h3>
                <ul>
                    <Link to="/profile" className="link447"><li>Xem thông tin chi tiết</li></Link>
                    <li>Đổi mật khẩu</li>
                    <Link to="/login" className="link447"><li>Đăng xuất</li></Link>
                </ul>
            </div>)}
        </div>  
    );
    }
}

export default Profile;
