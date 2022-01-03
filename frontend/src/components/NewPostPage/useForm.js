import { useState, useEffect } from 'react';
import axios from 'axios';

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
      axios.post("http://localhost:8000/new-post", values).then(res => {
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
