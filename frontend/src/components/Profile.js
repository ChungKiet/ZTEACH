import React from 'react';
import './Profile.css';
import profile from './images/profile.png';
import GlobalVar from '../GlobalVar';
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
            <div class="profile" onClick={this.ClickListener}>
                <img src={profile}/>
            </div>
            {this.state.onClick && (<div class="menu">
                <h3>Lan Anh</h3>
                <ul>
                    <li>Xem thông tin chi tiết</li>
                    <li>Đổi mật khẩu</li>
                    <li>Đăng xuất</li>
                </ul>
            </div>)}
        </div>  
    );
    }
}

export default Profile;
