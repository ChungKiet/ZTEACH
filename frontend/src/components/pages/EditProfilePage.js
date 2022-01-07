import React from 'react'
import EditProfileTutor from '../EditProfilePage/EditProfileTutor';
import EditProfile from '../EditProfilePage/EditProfile';
import GlobalVar from '../../GlobalVar';
function EditProfilePage() {
    return (
        <div>
            { GlobalVar.isLogin && <EditProfileTutor/>} {/* Test conect backend*/}
            {/* {GlobalVar.isLogin && GlobalVar.user.type==="Học viên" && <EditProfile/> }
            {GlobalVar.isLogin && GlobalVar.user.user_type==="Gia sư" && <EditProfileTutor/>} */}
        </div>
    )
}

export default EditProfilePage