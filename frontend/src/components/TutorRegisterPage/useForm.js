import { useState, useEffect } from 'react';
import axios from 'axios';
import GlobalVar from '../../GlobalVar';
import { useNavigate } from 'react-router-dom';

const useForm = (callback, validate) => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
   id: "",
   image:"",
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

  // function add image : (only 1 image)



  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
    console.log(values);
    //if(true){
    if (!errors.isError) {
      //const usertype = GlobalVar.user.user_type === "Học viên"? "user" : "tutor";
      axios.put('http://localhost:8000/tutors/register', values).then(res => { // 'http://localhost:8000/' + usertype + '/edit', values
        const msg = res.data;
        if (!msg.error) {
          alert("Cập nhật thành công!");
          GlobalVar.setUser(
            values
          );
          navigate('/profile/' + values.username);
        }
        else{
          alert("Cập nhật thành công!");
        }
      })
    }
  };

  useEffect(() => {
  const user = JSON.parse(window.sessionStorage.getItem('user19120000'));
  console.log("Test again!!");
   const fetchData = async() => {
    axios.post('http://localhost:8000/users/profile', {id: user._id}).then(res => {//   https://localhost:8000/ + user_type + edit
    const dt = res.data;
    setValues({
      id: dt._id,
      image: dt.image,
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
   })
   };
   fetchData();
   
}, []);

  return { handleChange, handleSubmit, classesChange,salaryChange,  values, errors };
};

export default useForm;
