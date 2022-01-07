import { useState, useEffect } from 'react';
import axios from 'axios';
import GlobalVar from '../../GlobalVar';
import { useNavigate } from 'react-router-dom';

const useForm = (callback, validate) => {
  const navigate = useNavigate();
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
   subjects: [],
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

 const subjectChange = e => {
  setValues({
    ...values,
    ["subjects"]: e
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
    //console.log(values);
    console.log(errors.isError);
    if (errors.isError === false) {
      const usertype = GlobalVar.user.user_type === "Học viên"? "user" : "tutor";
      axios.post('http://localhost:8000/' + usertype + '/edit', values).then(res => {
        const { msg } = res.data;
        if (msg === 1) {
          GlobalVar.setUser({
            name:values.name,
            email: values.email,
            birthday: values.birth_day,
            gender: values.gender,
            user_type: values.user_type,
            username: values.username,
            password: GlobalVar.user.password,
            password2: GlobalVar.user.password
          });
          navigate('/profile');
        }
        else if (msg === 2) {
          alert("Email đã tồn tại!");
        }
        else {
          alert("Tên đăng nhập đã tồn tại!");
        }
      })
    }
  };

  useEffect(() => {
   const fetchData = async() => {
       const usertype = GlobalVar.user.user_type === "Học viên"? "user" : "tutor";
       const result = await axios('http://localhost:8000/' + usertype + '/edit');
       const dt = result.data;
       setValues({
         username: dt.username,
         intro: dt.introduce,
         name: dt.name,
         user_type: dt.user_type,
         gender: dt.gender,
         gender_secure: dt.gender_secure,
         birth_day: dt.birth_day,
         birth_day_secure: dt.birth_day_secure,
         classes: dt.classes,
         major: dt.major,
         literacy: dt.literacy,
         salary: dt.fee,
         address: dt.address,
         address_secure: dt.address_secure,
         subjects: dt.subjects,
         email: dt.email,
         email_secure: dt.email_secure,
         contact: dt.contact,
         contact_secure: dt.contact_secure,
       });
   };
   fetchData();
   if (Object.keys(errors).length === 0 && isSubmitting) {
    callback();
  }   
}, [errors]);

  return { handleChange, handleSubmit, subjectChange, classesChange,salaryChange,  values, errors };
};

export default useForm;
