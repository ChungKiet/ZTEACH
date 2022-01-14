import React from 'react'
import EditProfileTutor from '../EditProfilePage/EditProfileTutor';
import EditProfile from '../EditProfilePage/EditProfile';
import GlobalVar from '../../GlobalVar';
function EditProfilePage() {
    var user = JSON.parse(window.sessionStorage.getItem("user19120000"));
    var isLogin = true;
    console.log(user);
    if (!user) isLogin = false;
    return (
        <div>
            {isLogin && user.user_type==="student" && <EditProfile/>} {/* Test conect backend*/}
            {isLogin && user.user_type==="tutor" && <EditProfileTutor/>}
            {/* {GlobalVar.isLogin && GlobalVar.user.type==="Học viên" && <EditProfile/> }
            {GlobalVar.isLogin && GlobalVar.user.user_type==="Gia sư" && <EditProfileTutor/>} */}
        </div>
    )
}

export default EditProfilePage