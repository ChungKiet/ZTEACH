import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const useForm = (callback, validate) => {
  //Date birth = new Date(2000, 1, 1);
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: '',
    gender: '',
    birthday: '',
    username: '',
    email: '',
    password: '',
    password2: '',
    user_type: 'student',
    image: 'https://firebasestorage.googleapis.com/v0/b/zteach-images.appspot.com/o/images%2Fprofile.png?alt=media&token=34e94b8d-cda6-4df8-8f4b-88a022d3b3fe'
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
    console.log(errors.isError);
    if(errors.isError === false){
      axios.post("http://localhost:8000/users/register", values).then(res=>{
      const {msg} = res.data;
      if(msg === 1){
         window.sessionStorage.setItem("user19120000", JSON.stringify(values));
         const user = window.sessionStorage.getItem("user19120000");
        navigate('/editprofile');
      }
      else if(msg === 2){
        alert("Email đã tồn tại!");
      }
      else{
        alert("Tên đăng nhập đã tồn tại!");
      }
    });
    }
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
