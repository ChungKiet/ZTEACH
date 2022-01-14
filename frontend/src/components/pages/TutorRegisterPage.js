import React from 'react'
import TutorRegister from '../TutorRegisterPage/TutorRegister';
import GlobalVar from '../../GlobalVar';
function TutorRegisterPage() {
    const user = JSON.parse(window.sessionStorage.getItem("user19120000"));
    var isLogin = true;
    if (!user) isLogin = false;
    return (
        <div>
            {isLogin && user.user_type==="student" && <TutorRegister />}
            {/* {GlobalVar.isLogin && GlobalVar.user.user_type==="Học viên" && <TutorRegister />} */}
        </div>
    )
}

export default TutorRegisterPage