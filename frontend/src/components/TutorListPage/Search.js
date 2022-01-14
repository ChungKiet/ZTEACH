import React from 'react'
import './Search.css';
import Dropdown from '../Dropdown';
import GlobalVar from '../../GlobalVar';



function Search(params) {
    const optionSelect = GlobalVar.optionSelect;


    const {handleChange, handleSubmit, values, errors} = params.params;

    return (
        <form className="search-frame40" onSubmit={handleSubmit}>
            <div className='search-grid-layout40'>
                <div className='text-search-frame40'> Tìm kiếm gia sư </div>
                <input
                        type="text"
                        className="search-input-full"
                        placeholder='Tên gia sư'
                        name="name"
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
                            placeholder="Chọn lớp"
                            name="grade"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className='search-sub-grid-layout40'>
                    <div>
                        <div className='text-item-search-frame40'> Giới tính </div>
                        <Dropdown id="id-select-gender"
                            className='search-choice-haft40'
                            values={optionSelect.gender}
                            placeholder="Chọn giới tính"
                            name="gender"
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <div className='text-item-search-frame40'> Trình độ </div>
                        <Dropdown id="id-select-literacy"
                            className='search-choice-haft40'
                            values={optionSelect.literacy}
                            placeholder="Chọn trình độ"
                            name="literacy"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className='search-sub-grid-layout40'>
                    <div>
                        <div className='text-item-search-frame40'> Tuổi tối thiểu </div>
                        <input
                            type="number"
                            className="search-input-haft"
                            placeholder='0'
                            name="older"
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <div className='text-item-search-frame40'> Tuổi tối đa </div>
                        <input
                            type="number"
                            className="search-input-haft"
                            placeholder='99'
                            name="younger"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div>
                    <div className='text-item-search-frame40'> Học phí tối đa (VND/tháng) </div>
                    <input
                        type="text"
                        className="search-input-full"
                        placeholder='VNĐ'
                        name="fee"
                        onChange={handleChange}
                    />
                </div>
                <div className='text-search-frame40'> Thông tin trên hệ thống </div>
                <div className='search-sub-grid-layout40'>
                    <div>
                        <div className='text-item-search-frame40'> Kinh nghiệm </div>
                        <input
                            type="number"
                            className="search-input-haft"
                            placeholder='Số học viên'
                            name="exp"
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <div className='text-item-search-frame40'> Xếp hạng </div>
                        <Dropdown id="id-select-literacy"
                            className='search-choice-haft40'
                            values={optionSelect.rate}
                            placeholder="Chọn số sao"
                            name="rate"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className='search-sub-grid-layout40'>
                    <button className="button-occupation-cancel40">
                        <div className="search-button" to='/post-list?subject=Toán'>
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

