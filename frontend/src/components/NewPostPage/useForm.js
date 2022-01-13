import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const useForm = (callback, validate) => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    subject: "",
    grade: "",
    study_form: "",
    lessons: "",
    time: "",
    start: "",
    title: "",
    information: "",
    literacy: "",
    gender: "",
    fee: ""
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
    
    const tmp = JSON.parse(window.sessionStorage.getItem("user19120000"));
    console.log(tmp); // _id, password

    const username = {username : tmp.username};
    console.log("username = ");
    console.log(username);
    const data = {...username, ...values}; //concatenate
    console.log("send data = ");
    console.log(data);


    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);    
    if(true){
    //if (!errors.isError) {
      axios.post("http://localhost:8000/posts/new-post", data).then(res => {
        console.log(res.data)
        const { message, id } = res.data;
        if (message === "Success") {
            alert("Tạo bài đăng thành công!");
            navigate("/posts/" + id);
            console.log("newpost-id = ");
            console.log(id);
        }
        else{
          alert("Lỗi khi tạo bài đăng!");
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
