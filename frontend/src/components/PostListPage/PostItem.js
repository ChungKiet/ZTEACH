import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './PostItem.css';
import 'bootstrap/dist/css/bootstrap.css';

import img_fee from '../images/postimg/fee.png';
import img_gender from '../images/postimg/gender.png';
import img_grade from '../images/postimg/grade.png';
import img_level from '../images/postimg/level.png';
import img_place from '../images/postimg/place.png';
import img_subject from '../images/postimg/subject.png';
import img_avata_user from '../images/profile.png';



function PostItem(params) {
    

    const values = params.params;
    //console.log(values);


    return (
        <div className="post-item-frame40">
            <div className="post-item-grid-title40">
                <Link to={'/profile/' + values.username} className="group-user-grid40">
                    <div>
                        <img className="user-img-post-item40" src={img_avata_user} />
                    </div>
                    <div class="username-post-item40">
                        {values.username}
                    </div>
                </Link>
                <Link to={'/post/' + values._id}  class="title-post-item40">
                    {values.title.length<=45 ? values.title : values.title.substring(0, 42) + "..."}
                </Link>
            </div>




            {/* flex row */}
            <div className="grid-2x3-subitem40">

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
                                {values.subject}
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
                                {values.grade}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Place */}
                <div className="img-label-detail40">
                    <img className="img-post" src={img_place} />
                    <div className="placeholder-text-container">
                        <div className="placeholder-text">
                            <div className="select-occupation">
                                Địa điểm học
                            </div>
                        </div>
                        <div className="placeholder-text-40">
                            <div className="select-occupation-1">
                                {values.study_form}
                            </div>
                        </div>
                    </div>
                </div>

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

                {/* Fee */}
                <div className="img-label-detail40">
                    <img className="img-post" src={img_fee} />
                    <div className="placeholder-text-container">
                        <div className="placeholder-text">
                            <div className="select-occupation">
                                Học phí (VNĐ/buổi)
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

export default PostItem;