import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useForm = (callback, validate) => {
  
  const navigate = useNavigate();
  const [values, setValues] = useState({
    page: "1",
    name: "",
    subject: "",
    grade: "",
    literacy: "",
    gender: "",
    older: "",
    younger: "",
    fee: "",
    exp: "",
    rate: "",
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
    if (values.name !== "") url = url + "name=" + values.name + "&";
    if (values.subject !== "") url = url + "subject=" + values.subject + "&";
    if (values.grade !== "") url = url + "grade=" + values.grade + "&";
    if (values.literacy !== "") url = url + "literacy=" + values.literacy + "&";
    if (values.gender !== "") url = url + "gender=" + values.gender + "&";
    if (values.older !== "") url = url + "older=" + values.older + "&";
    if (values.younger !== "") url = url + "younger=" + values.younger + "&";
    if (values.fee !== "") url = url + "fee=" + values.fee + "&";
    if (values.exp !== "") url = url + "exp=" + values.exp + "&";
    if (values.rate !== "") url = url + "rate=" + values.rate + "&";
    if (values.page !== "") url = url + "page=" + values.page;


    window.location.replace(url);
  };

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
