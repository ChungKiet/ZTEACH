import './NewPostForm.css';
import React from "react";
import Dropdown from '../Dropdown';
import validate from './validateInfo';
import useForm from './useForm';

function NewPostForm() {
  const submitForm = ()=>{
    console.log("Submitted");
  }
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );
  return (
    <div>
      <div className="sub-main2">
          <form className='form2' onSubmit={handleSubmit}>
            <h1 className='title2'>ĐĂNG KÝ</h1>
            <div className='form-inputs2'>
              <label className='form-label2'>Họ và tên</label>
              <input className='form-input2' type='text' placeholder='Nhập họ và tên' name='name' value={values.name}
            onChange={handleChange}/>
            </div>
            <div className='signup-area2'>
            <div className='form-inputs3'>
              <label className='form-label2'>Giới tính</label>
              <Dropdown className='form-input2' values={['Nam', 'Nữ']} name='gender' onChange={handleChange}/>
            </div>
            <div className='form-inputs4'>
               <label className='form-label2'>Ngày sinh</label>
                <input className='form-input2' type='date' name='birthday' value={values.birthday}
            onChange={handleChange}/>  
            </div>
            </div>
            <div className='form-inputs2'>
              <label className='form-label2'>Email</label>
              <input className='form-input2' type='email' placeholder='Nhập email' name='email' value={values.email}
            onChange={handleChange}/>
            </div>
            <div className='form-inputs2'>
              <label className='form-label2'>Tên đăng nhập</label>
              <input className='form-input2' type='text' placeholder='Nhập tên đăng nhập' name='username' value={values.username}
            onChange={handleChange}/>
            </div>
            <div className='form-inputs2'>
              <label className='form-label2'>Mật khẩu</label>
              <input className='form-input2' type='password' placeholder='Nhập mật khẩu' name='password' value={values.password}
            onChange={handleChange}/>
            </div>
            <div className='form-inputs2'>
              <label className='form-label2'>Nhập lại mật khẩu</label>
              <input className='form-input2' type='password' placeholder='Nhập lại mật khẩu' name='password2' value={values.password2}
            onChange={handleChange}/>
            </div>
           
            <div className='signup-area2'>
              <button className='form-input-btn22'>Đăng ký</button>
              <a href="/login">Đã có tài khoản?</a>
            </div>
           
 
         </form>
       </div>
    </div>
  );
}

export default NewPostForm;