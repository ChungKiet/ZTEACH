import React, { useState, useEffect } from "react";
import './TutorItem.css';
import 'bootstrap/dist/css/bootstrap.css';

import img_fee from '../images/postimg/fee.png';
import img_gender from '../images/postimg/gender.png';
import img_grade from '../images/postimg/grade.png';
import img_level from '../images/postimg/level.png';
import img_age from '../images/postimg/age.png';
import img_subject from '../images/postimg/subject.png';


function TutorItem(params) {
    const values = params.params;
    var arr=[];
    const rateX2 = Math.round(values.rate*2);
    for (var i=1; i*2<=rateX2; i++)
        arr[i]=i;

    function handleString(params) {
        var res = "";
        for (var i = 0; i < params.length; i++){
            if (i > 0) res = res + ", ";
            res = res += params[i].value;
        }
        return res;
    }

    function handleAge(birthday) {
        const day = birthday.split("T")[0];
        const year = day.split("-")[0];
        return 2022 - year;
    }
    
    return (
        <div className="tutor-item-frame40">

            <div className="flex-column-tutor-list40">
                <a href={'/profile/' + values.username} className="bounder-user-img-tutor-item40">
                    <img className="user-img-tutor-item40" src={values.image} />
                </a>
                <a href={'/profile/' + values.username}  class="username-tutor-item40">
                    {values.username}
                </a>
                <div className="star-user40" id="myHTMLWrapper">
                    {arr.map(item  => (
                        <div style={{color: 'rgb(255, 200, 0)', fontSize: '40px',marginTop: '-12px'}}> ★ </div>
                    ))}
                    {rateX2 % 2 == 1 ? <div style={{color: 'rgb(255, 220, 100)', fontSize: '40px',marginTop: '-12px'}}> ★ </div> : <></>}
                    
                </div>
            </div>




            <div className="grid-3x2-subitem40">

                {/* Level */}
                <div className="img-label-detail40">
                    <img className="img-post" src={img_level} />
                    <div className="placeholder-text-container">
                        <div className="placeholder-text">
                            <div className="select-occupation">
                                Trình độ gia sư
                            </div>
                        </div>
                        <div className="placeholder-text-40">
                            <div className="select-occupation-1">
                                {values.literacy}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Subject */}
                <div className="img-label-detail40">
                    <img className="img-post" src={img_subject} />
                    <div className="placeholder-text-container">
                        <div className="placeholder-text">
                            <div className="select-occupation">
                                Môn học
                            </div>
                        </div>
                        <div className="placeholder-text-40">
                            <div className="select-occupation-1">
                                {handleString(values.subjects)}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Gender */}
                <div className="img-label-detail40">
                    <img className="img-post" src={img_gender} />
                    <div className="placeholder-text-container">
                        <div className="placeholder-text">
                            <div className="select-occupation">
                                Giới tính
                            </div>
                        </div>
                        <div className="placeholder-text-40">
                            <div className="select-occupation-1">
                                {values.gender}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Grade */}
                <div className="img-label-detail40">
                    <img className="img-post" src={img_grade} />
                    <div className="placeholder-text-container">
                        <div className="placeholder-text">
                            <div className="select-occupation">
                                Khối lớp
                            </div>
                        </div>
                        <div className="placeholder-text-40">
                            <div className="select-occupation-1">
                                {handleString(values.classes)}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Place */}
                <div className="img-label-detail40">
                    <img className="img-post" src={img_age} />
                    <div className="placeholder-text-container">
                        <div className="placeholder-text">
                            <div className="select-occupation">
                                Tuổi
                            </div>
                        </div>
                        <div className="placeholder-text-40">
                            <div className="select-occupation-1">
                                {handleAge(values.birthday)}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Fee */}
                <div className="img-label-detail40">
                    <img className="img-post" src={img_fee} />
                    <div className="placeholder-text-container">
                        <div className="placeholder-text">
                            <div className="select-occupation">
                                Học phí (VNĐ/tháng)
                            </div>
                        </div>
                        <div className="placeholder-text-40">
                            <div className="select-occupation-1">
                                {values.fee}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default TutorItem;