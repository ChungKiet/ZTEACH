import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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

    var url = '/post-list?';
    if (values.title !== "") url = url + "title=" + values.title + "&";
    if (values.subject !== "") url = url + "subject=" + values.subject + "&";
    if (values.grade !== "") url = url + "grade=" + values.grade + "&";
    if (values.study_form !== "") url = url + "study_form=" + values.study_form + "&";
    if (values.lesson !== "") url = url + "lesson=" + values.lesson + "&";
    if (values.time !== "") url = url + "time=" + values.time + "&";
    if (values.fee !== "") url = url + "fee=" + values.fee + "&";
    if (values.literacy !== "") url = url + "literacy=" + values.literacy + "&";
    if (values.gender !== "") url = url + "gender=" + values.gender + "&";
    if (values.page !== "") url = url + "page=" + values.page;


    window.location.replace(url);
  };

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
