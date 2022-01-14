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
    
    const user = (JSON.parse(window.sessionStorage.getItem("user19120000")));
    const addInfo = {username : user.username, image : user.image};
    console.log(addInfo);
    const data = {...addInfo, ...values}; //concatenate
    console.log("send data = ");
    console.log(data);

    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);    
    if(true){
    //if (!errors.isError) {
      axios.post("http://localhost:8000/posts/new-post", data).then(res => {
        console.log(res.data)
        const {id, result, message} = res.data;
        if (result === 1 || result === "1") {
            alert("Tạo bài đăng thành công!");
            navigate("/post/" + id);
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
