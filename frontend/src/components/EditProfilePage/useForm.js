import { useState, useEffect } from 'react';
import axios from 'axios';
import GlobalVar from '../../GlobalVar';
import { useNavigate } from 'react-router-dom';

const useForm = (callback, validate) => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    image:"",
   id: "",
   username: "KietChung",
   introduce: "No intro",
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
   fee: "",
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
      ["fee"]: value
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
    if (!errors.isError) {
      //const usertype = GlobalVar.user.user_type === "Học viên"? "user" : "tutor";
        const user_type = values.user_type === "student"? "users":"tutors";
        axios.put('http://localhost:8000/'+ user_type + '/edit', values).then(res => { // 'http://localhost:8000/' + usertype + '/edit', values
        const msg = res.data;
        if (!msg.error) {
          GlobalVar.setUser(
            values
          );
          navigate('/profile/' + values.username);
          alert("Cập nhật thành công!");
          //window.sessionStorage.setItem('user19120000', values);
        }
        else{
          alert("Cập nhật thất bại!");
        }
        //alert(msg);
      })
    }
  };

  useEffect(() => {
   const user = JSON.parse(window.sessionStorage.getItem('user19120000'));
   const user_type = user.user_type === "student"? "users": "tutors";
   console.log("I'm here bro!");
   console.log(user);
   const fetchData = async() => {
       //const usertype = GlobalVar.user.user_type === "Học viên"? "user" : "tutor";
       axios.post('http://localhost:8000/'+ user_type +'/profile', {username: user.username}).then(res => {//   https://localhost:8000/ + user_type + edit
       const dt = res.data;
       setValues({
         id: dt._id,
         image: dt.image,
         username: dt.username,
         introduce: dt.introduce,
         name: dt.name,
         user_type: dt.user_type,
         gender: dt.gender,
         gender_secure: dt.gender_secure,
         birthday: dt.birthday,
         birthday_secure: dt.birthday_secure,
         classes: dt.classes,
         major: dt.major,
         literacy: dt.literacy,
         fee: dt.fee,
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
