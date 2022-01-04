import React from 'react'
import './Search.css';
import Dropdown from '../Dropdown';
import useForm from './useForm'
import validate from './validateInfo';

function Search() {
    const submitForm = () => {
        console.log("Submitted");
    }
    const { handleChange, handleSubmit, values, errors } = useForm(
        submitForm,
        validate
    );

    const optionSelect = {
        subject: ['Toán', 'Lý', 'Hóa', 'Sinh', 'Văn', 'Sử', 'Địa', 'Anh', 'KHTN', 'KHXH'],
        grade: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        place: ['ONLINE', 'Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8', 'Q9', 'Q10', 'Q11', 'Q12', 'Bình Chánh', 'Bình Tân', 'Bình Thạnh', 'Cần Giờ', 'Củ Chi', 'Gò Vấp', 'Hóc Môn', 'Nhà Bè', 'Phú Nhuận', 'Tân Bình', 'Tân Phú', 'Thủ Đức'],
        daysperweek: [1, 2, 3, 4, 5, 6, 7],
        duration: ['1h', '1.5h', '2h', '2.5h', '3h', '3.5h', '4h'],
        tutor_gender: ['Nam', 'Nữ', 'Khác'],
        tutor_level: ['Sinh viên', 'Giáo viên']
    }

    return (
        <div className="search-frame40">
            <div className='search-grid-layout40'>
                <div className='text-search-frame40'> Tìm kiếm lớp học </div>
                <input className='search-input-full' type='text' placeholder='VD: Luyện thi đại học'/>
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
                    <div/>
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
                    <Dropdown id="id-select-place"
                        className='search-choice-full40'
                        values={optionSelect.place}
                        name="place"
                        placeholder="Chọn nơi học"
                        onChange={handleChange}
                    />
                </div>
                <div className='search-sub-grid-layout40'>
                    <div>
                        <div className='text-item-search-frame40'> Số buổi/tuần </div>
                        <Dropdown id="id-select-dpw"
                            className='search-choice-haft40'
                            values={optionSelect.daysperweek}
                            name="daysperweek"
                            placeholder="Chọn số buổi/tuần"
                            onChange={handleChange}
                        />
                    </div>
                    <div/>
                    <div>
                        <div className='text-item-search-frame40'> Thời lượng/buổi </div>
                        <Dropdown id="id-select-duration"
                            className='search-choice-haft40'
                            values={optionSelect.duration}
                            name="duration"
                            placeholder="Chọn thời gian mỗi buổi"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div>
                    <div className='text-item-search-frame40'> Học phí tối thiểu (VND/buổi) </div>
                    <input className='search-input-full' type='text' placeholder='0'/>
                </div>
                <div className='text-search-frame40'> Yêu cầu đối với gia sư </div>
                <div className='search-sub-grid-layout40'>
                    <div>
                        <div className='text-item-search-frame40'> Giới tính </div>
                        <Dropdown id="id-select-gender"
                            className='search-choice-haft40'
                            values={optionSelect.tutor_gender}
                            name="tutor_gender"
                            placeholder="Chọn giới tính"
                            onChange={handleChange}
                        />
                    </div>
                    <div/>
                    <div>
                        <div className='text-item-search-frame40'> Trình độ </div>
                        <Dropdown id="id-select-level"
                            className='search-choice-haft40'
                            values={optionSelect.tutor_level}
                            name="tutor_level"
                            placeholder="Chọn trình độ"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className='search-sub-grid-layout40'>
                    <button className="button-occupation-cancel40">
                        <div className="search-button">
                            Hủy
                        </div>
                    </button>
                    <button className="button-occupation-ok40" type="submit" >
                        <div className="search-button">
                            Đăng
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Search;

