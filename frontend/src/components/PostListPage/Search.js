import React from 'react'
import './Search.css';
import Dropdown from '../Dropdown';
import useForm from './useForm'
import validate from './validateInfo';
import GlobalVar from '../../GlobalVar';

const optionSelect = GlobalVar.optionSelect;

function Search() {
    const submitForm = () => {
        console.log("Submitted");
    }
    const { handleChange, handleSubmit, values, errors } = useForm(
        submitForm,
        validate
    );

    return (
        <form className="search-frame40" onSubmit={handleSubmit}>
            <div className='search-grid-layout40'>
                <div className='text-search-frame40'> Tìm kiếm lớp học </div>
                <input
                        type="text"
                        className="search-input-full"
                        placeholder='VD: Luyện thi đại học'
                        name="title"
                        onChange={handleChange}
                    />
                <div className='search-sub-grid-layout40'>
                    <div>
                        <div className='text-item-search-frame40'> Môn học </div>
                        <Dropdown id="id-select-subject"
                            className='search-choice-haft40'
                            values={optionSelect.subject}
                            name="subject"
                            placeholder="Chọn môn học"
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <div className='text-item-search-frame40'> Lớp </div>
                        <Dropdown id="id-select-grade"
                            className='search-choice-haft40'
                            values={optionSelect.grade}
                            name="grade"
                            placeholder="Chọn lớp"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div>
                    <div className='text-item-search-frame40'> Địa điểm </div>
                    <Dropdown id="id-select-study-form"
                        className='search-choice-full40'
                        values={optionSelect.study_form}
                        name="study_form"
                        placeholder="Chọn nơi học"
                        onChange={handleChange}
                    />
                </div>
                <div className='search-sub-grid-layout40'>
                    <div>
                        <div className='text-item-search-frame40'> Số buổi/tuần </div>
                        <Dropdown id="id-select-lesson"
                            className='search-choice-haft40'
                            values={optionSelect.lesson}
                            name="lesson"
                            placeholder="Chọn số buổi"
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <div className='text-item-search-frame40'> Thời lượng/buổi </div>
                        <Dropdown id="id-select-time"
                            className='search-choice-haft40'
                            values={optionSelect.time}
                            name="time"
                            placeholder="Chọn số giờ"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div>
                    <div className='text-item-search-frame40'> Học phí tối thiểu (VND/tháng) </div>
                    <input
                        type="text"
                        className="search-input-full"
                        placeholder='VNĐ'
                        name="fee"
                        onChange={handleChange}
                    />
                </div>
                <div className='text-search-frame40'> Yêu cầu đối với gia sư </div>
                <div className='search-sub-grid-layout40'>
                    <div>
                        <div className='text-item-search-frame40'> Giới tính </div>
                        <Dropdown id="id-select-gender"
                            className='search-choice-haft40'
                            values={optionSelect.gender}
                            name="gender"
                            placeholder="Chọn giới tính"
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <div className='text-item-search-frame40'> Trình độ </div>
                        <Dropdown id="id-select-literacy"
                            className='search-choice-haft40'
                            values={optionSelect.literacy}
                            name="literacy"
                            placeholder="Chọn trình độ"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className='search-sub-grid-layout40'>
                    <button className="button-occupation-cancel40">
                        <div className="search-button">
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

