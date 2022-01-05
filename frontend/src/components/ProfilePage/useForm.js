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
   voting: "4.5",
   evaluate: "10",
   dayreg: "2022-01-04",
   birth_day_secure: "Riêng tư",
   subject: ["Toán, Lý"],
   classes: ["Lớp 1", "Lớp 2"],
   major: "CNTT",
   literacy: "Sinh viên",
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


  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
    console.log(values);
    if(true){
    //if (!errors.isError) {
      const user_type = GlobalVar.user.user_type === "Học viên"? "users": "tutors";
      axios.post("http://localhost:8000/" + user_type + GlobalVar.user.username, values).then(res => {
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

  useEffect(() => {
   const fetchData = async() => {
       const user_type = GlobalVar.user.user_type === "Học viên"? "users": "tutors";
       const result = await axios.post("http://localhost:8000/" + user_type + "/" + GlobalVar.user.username);
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
         classes: dt.classes,
         voting: dt.voting,
         evaluate: dt.evaluate,
         dayreg: dt.dayreg,
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

  return { handleSubmit, values, errors };
};

export default useForm;
