import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const useForm = (callback, validate) => {
  const query = window.location.search;
  console.log('http://localhost:8000/posts' + query);
  
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

  useEffect(() => {
        const fetchData = async () => {
            



            const result = await axios('http://localhost:8000/posts' + query);
            const data = result.data;
            console.log(data)
            //
        };
        fetchData();
    }, []);

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
