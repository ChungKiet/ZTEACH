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
    user_type: 'student'
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
    //console.log(values);
    console.log(errors.isError);
    if(errors.isError === false){
      axios.post("http://localhost:8000/users/register", values).then(res=>{
      const {msg} = res.data;
      if(msg === 1){
         window.sessionStorage.setItem("user19120000", JSON.stringify(values));
         const user = window.sessionStorage.getItem("user19120000");
        //GlobalVar.changeLogin();
        //GlobalVar.setUser(values);
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
