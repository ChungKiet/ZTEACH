import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const useForm = (callback, validate, dt) => {
  const navigate = useNavigate();

  const [values, setValues] = useState(dt);
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
    
    //const tmp = JSON.parse(window.sessionStorage.getItem("user19120000"));
    //console.log(tmp); // _id, password
    //const user = {user : tmp._id};
    //const data = {...user, ...values}; //concatenate
    //console.log(data);
    console.log("PUT data:\n");
    console.log(values);
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);    
    if(true){
    //if (!errors.isError) {
      axios.put("http://localhost:8000/posts/edit", values).then(res => {
        console.log(res.data)
        const { message, uid } = res.data;
        if (message === "Update Success") {
            alert("Cập nhật thành công!");
            
            navigate("/posts/" + values.id);
        }
        else{
          alert("Lỗi xảy ra khi cập nhật bài đăng!");
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
