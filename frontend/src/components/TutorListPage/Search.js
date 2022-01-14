import React from 'react'
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
                <div className='text-search-frame40'> Tìm kiếm gia sư </div>
                <input
                        type="text"
                        className="search-input-full"
                        placeholder='Tên gia sư'
                        name="name"
                        value={values.name}
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
                    <div>
                        <div className='text-item-search-frame40'> Tuổi tối thiểu </div>
                        <input
                            type="number"
                            className="search-input-haft"
                            placeholder='0'
                            name="older"
                            value={values.older}
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
                            value={values.younger}
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
                        value={values.fee}
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
                            value={values.exp}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <div className='text-item-search-frame40'> Xếp hạng </div>
                        {mySelect("rate", "Chọn số sao", 'search-choice-haft40')}
                    </div>
                </div>
                <div className='search-sub-grid-layout40'>
                    <button className="button-occupation-cancel40" onClick={handleDelete}>
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

