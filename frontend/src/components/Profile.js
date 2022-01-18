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
    LogoutListener(){
        window.sessionStorage.removeItem("user19120000");
    }
    render(){
    const tmp = window.sessionStorage.getItem("user19120000");
    const user = JSON.parse(tmp); 
    return (
          <div class="action">
            <div class="profile447" onClick={this.ClickListener}>
                <img src={user.image}/>
            </div>
            {this.state.onClick && (<div class="menu447">
                <h3>{JSON.parse(window.sessionStorage.getItem("user19120000")).username}</h3>
                <div className="fix446">
                    <a href={"/profile/" + JSON.parse(window.sessionStorage.getItem("user19120000")).username} className="link447"><div className="fix447">Xem thông tin chi tiết</div></a>
                    <div className="fix447">Đổi mật khẩu</div>
                    <Link to="/login" className="link447" onClick={this.LogoutListener}><div className="fix447">Đăng xuất</div></Link>
                </div>
            </div>)}
        </div>  
    );
    }
}

export default Profile;
