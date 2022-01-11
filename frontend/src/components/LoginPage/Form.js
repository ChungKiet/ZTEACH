import './LoginForm.css';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Form() {
  const { register, handleSubmit, errors } = useForm();
  const navigate = useNavigate();
  
  const onHandleSubmit = (data) => {
    console.log(data);
    axios.post("http://localhost:8000/users/login", data).then(res => {
      const { isLogin, user } = res.data;
      console.log(res.data);
      if (isLogin === 1) {
        //GlobalVar.changeLogin();
        //GlobalVar.setUser(user);
        //setUser(user);
        window.sessionStorage.setItem("user19120000", JSON.stringify(user));
        window.sessionStorage.setItem("isLogin", true);
        navigate('/');
      }
      else if (isLogin === 2) {
        alert("Không tồn tại tên đăng nhập!");
      }
      else {
        alert("Sai mật khẩu!");
      }
    });
  }
  return (
    <div>
      <div className="sub-main">
        <form className='form' onSubmit={handleSubmit(onHandleSubmit)}>
          <h1 className='title'>ĐĂNG NHẬP</h1>
          <div className='form-inputs'>
            <label className='form-label'>Tên đăng nhập</label>
            <input className='form-input' type='text' placeholder='Nhập tên đăng nhập' name='username' {...register('username', { required: true })} />
          </div>
          <div className='form-inputs'>
            <label className='form-label'>Mật khẩu</label>
            <input className='form-input' type='password' placeholder='Nhập mật khẩu' name='password' {...register('password', { required: true })} />
          </div>
          <div className='btn-container'><button className='form-input-btn' type='submit'>Đăng nhập</button></div>

          <div className='signup-area'>
            <Link to="/signup"><button className='form-input-btn2'>Đăng ký</button></Link>
            <a href="#">Quên mật khẩu?</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;