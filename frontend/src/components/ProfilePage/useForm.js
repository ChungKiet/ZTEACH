import { useState, useEffect } from 'react';
import axios from 'axios';
import GlobalVar from '../../GlobalVar';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
   id: "",
   username: "KietChung",
   intro: "No intro",
   name: "Kiệt Chung",
   user_type: "Học viên",
   gender: "Nam",
   gender_secure: "Công khai",
   birthday: "2001-12-17",
   voting: "4.5",
   evaluate: "10",
   dayreg: "2022-01-04",
   birthday_secure: "Công khai",
   subject: ["Toán, Lý"],
   classes: ["Lớp 1", "Lớp 2"],
   major: "CNTT",
   literacy: "Sinh viên",
   salary: "",
   address: "No address",
   address_secure: "Công khai",
   email: "No email",
   email_secure: "Công khai",
   contact: "No Contact",
   contact_secure: "Công khai",
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

  const checkValue = (data) => {
      const get_id =data._id;
      const get_username =  data.username;
      const get_intro =  data.introduce;
      const get_name =  data.name;
      const get_user_type =  data.user_type;
      const get_gender = data.gender;
      const get_gender_secure = data.gender_secure;
      const get_birth_day = data.birth_day;
      const get_birth_day_secure = data.birth_day_secure;
      const get_classes = data.classes;
      const get_major = data.major;
      const get_literacy = data.literacy;
      const get_salary = data.fee;
      const get_address = data.address;
      const get_address_secure = data.address_secure;
      const get_subjects =  data.subjects;
      const get_email = data.email;
      const get_email_secure = data.email_secure;
      const get_contact = data.contact;
      const get_contact_secure = data.contact_secure;
      const get_voting = data.voting;
      // Toàn bộ check trong hàm này
      // Tùy vào người dùng sẽ được thiết lập khác nhau
      // Khi sang trang edit profile thì phải load lần nữa chính nó
      // if ()
      // 
      const isLogin = window.sessionStorage.getItem("isLogin");
      if (isLogin){
        // Neu da dang nhap
        // Neu set rieng thu thi set = "Da bi an"
        if (get_gender_secure==="Riêng tư"){
          get_gender = "Đã bị ẩn";
        }  
        if (get_birth_day_secure==="Riêng tư"){
          get_birth_day = "Đã bị ẩn"
        }
        //if ()
      }
      else{

      }
  }

  useEffect(() => {
  const URL = window.location.pathname;
  const tmp = URL.split('/');
  const username = tmp[tmp.length - 1];
  const user = JSON.parse(window.sessionStorage.getItem('user19120000'));
   const fetchData = async() => {    
    axios.post('http://localhost:8000/users/profile', {username: username }).then(res => {//   https://localhost:8000/ + user_type + edit
    const dt = res.data;
    if (!dt)
      return;
    setValues({
      id: dt._id,
      username: dt.username,
      intro: dt.introduce,
      name: dt.name,
      user_type: dt.user_type,
      gender: dt.gender,
      gender_secure: dt.gender_secure,
      birthday: dt.birth_day,
      birthday_secure: dt.birth_day_secure,
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
   axios.post('http://localhost:8000/tutors/profile', {username: username }).then(res => {//   https://localhost:8000/ + user_type + edit
   const dt = res.data;
   if (!dt)
     return;
   setValues({
     id: dt._id,
     username: dt.username,
     intro: dt.introduce,
     name: dt.name,
     user_type: dt.user_type,
     gender: dt.gender,
     gender_secure: dt.gender_secure,
     birthday: dt.birth_day,
     birthday_secure: dt.birth_day_secure,
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

  return { handleSubmit ,  values, errors };
};

export default useForm;
