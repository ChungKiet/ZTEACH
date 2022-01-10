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
   birthday: "2001-12-17",
   birthday_secure: "Riêng tư",
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

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
    //console.log(values);
    console.log(errors.isError);
    console.log(values);
    alert("I'm here");
    if (!errors.isError) {
      //const usertype = GlobalVar.user.user_type === "Học viên"? "user" : "tutor";
        axios.put('http://localhost:8000/users/edit', values).then(res => { // 'http://localhost:8000/' + usertype + '/edit', values
        const msg = res.data;
        alert("I'm here");
        if (!msg.error) {
          GlobalVar.setUser(
            values
          );
          navigate('/profile');
          alert("Cập nhật thành công!");
        }
        else{
          alert("Cập nhật thất bại!");
        }
        //alert(msg);
      })
    }
  };

  useEffect(() => {
   const fetchData = async() => {
       //const usertype = GlobalVar.user.user_type === "Học viên"? "user" : "tutor";
       axios.post('http://localhost:8000/users/profile', {id: '61d63bc74ed1d19b0d4a8db9'}).then(res => {//   https://localhost:8000/ + user_type + edit
       const dt = res.data;
       setValues({
         username: dt.username,
         intro: dt.introduce,
         name: dt.name,
         user_type: dt.user_type,
         gender: dt.gender,
         gender_secure: dt.gender_secure,
         birth_day: dt.birthday,
         birth_day_secure: dt.birthday_secure,
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
      })
   };
   fetchData();
   if (Object.keys(errors).length === 0 && isSubmitting) {
    callback();
  }   
}, [errors]);

  return { handleChange, handleSubmit, subjectChange, classesChange,salaryChange,  values, errors };
};

export default useForm;
