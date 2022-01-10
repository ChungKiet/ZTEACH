import React from 'react'
import TutorRegister from '../TutorRegisterPage/TutorRegister';
import GlobalVar from '../../GlobalVar';
function TutorRegisterPage() {
    return (
        <div>
            {<TutorRegister />}
            {/* {GlobalVar.isLogin && GlobalVar.user.user_type==="Học viên" && <TutorRegister />} */}
        </div>
    )
}

export default TutorRegisterPage