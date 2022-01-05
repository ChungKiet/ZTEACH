import React from 'react'
import TutorRegister from '../TutorRegisterPage/TutorRegister';
import GlobalVar from '../../GlobalVar';
function TutorRegisterPage() {
    return (
        <div>
            {GlobalVar.isLogin && <TutorRegister />}
        </div>
    )
}

export default TutorRegisterPage