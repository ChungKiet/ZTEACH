import { useState, useEffect } from 'react';
import axios from 'axios';
import GlobalVar from '../../GlobalVar';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
   username: "KietChung",
   intro: "No intro",
   name: "Kiệt Chung",
   user_type: "Học viên",
   gender: "Nam",
   gender_secure: "Công khai",
   birth_day: "2001-12-17",
   birth_day_secure: "Riêng tư",
   classes: [],
   major: "",
   literacy: "",
   salary: "",
   address: "No address",
   address_secure: "Riêng tư",
   email: "No email",
   email_secure: "Riêng tư",
   contact: "No Contact",
   contact_secure: "Riêng tư",
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

  const classesChange = e => {
   setValues({
     ...values,
     ["classes"]: e
   });
 };

 const salaryChange = e => {
  const value = e.target.value.replace(/\D/g, "");
  const re = /^[0-9\b]+$/;
  if (e.target.value === '' || re.test(e.target.value)) {
    setValues({
      ...values,
      ["salary"]: value
    });
  }
};

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
    console.log(values);
    if(true){
    //if (!errors.isError) {
      const usertype = GlobalVar.user.user_type === "Học viên"? "user" : "tutor";
      axios.post('http://localhost:8000/' + usertype + '/edit?_method=PUT', values).then(res => {
        console.log(res)
        const { isSucceeded } = res.data;
        if (isSucceeded === true) {
            alert("Cập nhật thành công")
        }
        else{
          alert("Thất bại")
        }
    });
    }
  };

  useEffect(() => {
   const fetchData = async() => {
       const usertype = GlobalVar.user.user_type === "Học viên"? "user" : "tutor";
       const result = await axios('http://localhost:8000/' + usertype + '/edit?_method=PUT');
       const dt = result.data;
       setValues({
         username: dt.username,
         intro: dt.introduce,
         name: dt.name,
         user_type: dt.user_type,
         gender: dt.gender.value,
         gender_secure: dt.gender.state,
         birth_day: dt.birth.value,
         birth_day_secure: dt.birth.state,
         classes: [],
         major: dt.major,
         literacy: dt.literacy,
         salary: dt.fee,
         address: dt.address.value,
         address_secure: dt.address.state,
         email: dt.email.value,
         email_secure: dt.email.state,
         contact: dt.contact.value,
         contact_secure: dt.contact.state,
       });
   };
   fetchData();
   
}, []);

  return { handleChange, handleSubmit, classesChange,salaryChange,  values, errors };
};

export default useForm;
