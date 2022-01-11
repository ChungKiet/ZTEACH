import { useState, useEffect } from 'react';
import axios from 'axios';
import GlobalVar from '../../GlobalVar';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    subject: "",
    grade: "",
    place: "",
    daysperweek: "",
    duration: "",
    start_date: "",
    title: "",
    detail: "",
    tutor_level: "",
    tutor_gender: "",
    salary: ""
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
    console.log(values);
    if(true){
    //if (!errors.isError) {
      axios.put("http://localhost:8000/edit-post", values).then(res => {
        console.log(res)
        const { isSucceeded } = res.data;
        if (isSucceeded === true) {
            alert("Thành công rồi nha!")
        }
        else{
          alert("Thất bại!")
        }
    });
    }
  };

  useEffect(() => {
    const fetchData = async() => {
        //const usertype = GlobalVar.user.user_type === "Học viên"? "user" : "tutor";
        axios.post('http://localhost:8000/post', {id: '61d63bc74ed1d19b0d4a8db9'}).then(res => {//   https://localhost:8000/ + user_type + edit
        const dt = res.data;
        setValues({
          subject: dt.subject,
          grade: dt.grade,
          place: dt.place,
          daysperweek: dt.daysperweek,
          duration: dt.duration,
          start_date: dt.start_date,
          title: dt.title,
          detail: dt.detail,
          tutor_level: dt.tutor_level,
          tutor_gender: dt.tutor_gender,
          salary: dt.fee,
        });
       })
    };
    fetchData();
    if (Object.keys(errors).length === 0 && isSubmitting) {
     callback();
   }   
 }, [errors]);

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
