import React from 'react'
import EditProfileTutor from '../EditProfilePage/EditProfileTutor';
import EditProfile from '../EditProfilePage/EditProfile';
import GlobalVar from '../../GlobalVar';
function EditProfilePage() {
    return (
        <div>
            {GlobalVar.isLogin && <EditProfileTutor />} {/*&& GlobalVar.user.type==="Học viên" */}
            {GlobalVar.isLogin && GlobalVar.user.type==="Gia sư" && <EditProfileTutor />}
        </div>
    )
}

export default EditProfilePage