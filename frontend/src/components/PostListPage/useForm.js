import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useForm = (callback, validate) => {
  
  const navigate = useNavigate();
  const [values, setValues] = useState({
    page: "1",
    title: "",
    subject: "",
    grade: "",
    study_form: "",
    lesson: "",
    time: "",
    fee: "",
    literacy: "",
    gender: ""
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



    navigate('/post');
  };

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
