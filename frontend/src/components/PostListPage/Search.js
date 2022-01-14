import React, {useState, useEffect} from 'react'
import './Search.css';
import Dropdown from '../Dropdown';
import GlobalVar from '../../GlobalVar';



function Search(params) {
    const optionSelect = GlobalVar.optionSelect;


    const {handleChange, handleSubmit, handleDelete, values, errors} = params.params;
    console.log(values);


    function mySelect(name, placeholder, className) {
        return (
            <select id={"id-select-" + name}
                className={className}
                name={name}
                value={values[name]}
                onChange={handleChange}>
                {!optionSelect[name].includes(values[name]) ? <option value="" disabled selected>{placeholder}</option>:<></>}
                {optionSelect[name].map(item => (<option value={item}>{item}</option>))}
            </select>
        )
    }


    return (
        <form className="search-frame40" onSubmit={handleSubmit}>
            <div className='search-grid-layout40'>
                <div className='text-search-frame40'> Tìm kiếm lớp học </div>
                <input
                        type="text"
                        className="search-input-full"
                        placeholder='VD: Luyện thi đại học'
                        name="title"
                        value={values.title}
                        onChange={handleChange}
                    />
                <div className='search-sub-grid-layout40'>
                    <div>
                        <div className='text-item-search-frame40'> Môn học </div>
                        {mySelect("subject", "Chọn môn", 'search-choice-haft40')}
                    </div>
                    <div>
                        <div className='text-item-search-frame40'> Lớp </div>
                        {mySelect("grade", "Chọn lớp", 'search-choice-haft40')}
                    </div>
                </div>
                <div>
                    <div className='text-item-search-frame40'> Địa điểm </div>
                    {mySelect("study_form", "Chọn địa điểm", 'search-choice-full40')}
                </div>
                <div className='search-sub-grid-layout40'>
                    <div>
                        <div className='text-item-search-frame40'> Số buổi/tuần </div>
                        {mySelect("lesson", "Chọn số buổi", 'search-choice-haft40')}
                    </div>
                    <div>
                        <div className='text-item-search-frame40'> Thời lượng/buổi </div>
                        {mySelect("time", "Chọn số giờ", 'search-choice-haft40')}
                    </div>
                </div>
                <div>
                    <div className='text-item-search-frame40'> Học phí tối thiểu (VND/tháng) </div>
                    <input
                        type="text"
                        className="search-input-full"
                        placeholder='VNĐ'
                        name="fee"
                        value={values.fee}
                        onChange={handleChange}
                    />
                </div>
                <div className='text-search-frame40'> Yêu cầu đối với gia sư </div>
                <div className='search-sub-grid-layout40'>
                    <div>
                        <div className='text-item-search-frame40'> Giới tính </div>
                        {mySelect("gender", "Chọn giới tính", 'search-choice-haft40')}
                    </div>
                    <div>
                        <div className='text-item-search-frame40'> Trình độ </div>
                        {mySelect("literacy", "Chọn trình độ", 'search-choice-haft40')}
                    </div>
                </div>
                <div className='search-sub-grid-layout40'>
                    <button className="button-occupation-cancel40">
                        <div className="search-button" to='/post-list?subject=Toán' onClick={handleDelete}>
                            Xoá
                        </div>
                    </button>
                    <button className="button-occupation-ok40" type="submit" >
                        <div className="search-button">
                            Tìm
                        </div>
                    </button>
                </div>
            </div>
        </form>
    )
}

export default Search;

