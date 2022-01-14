import { useState, useEffect } from 'react';
import axios from 'axios';
import GlobalVar from '../../GlobalVar';
import { useNavigate } from 'react-router-dom';
import { storage } from '../../firebase';

const useForm = (callback, validate) => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
   id: "",
   image:"",
   username: "",
   introduce: "No intro",
   name: "Kiệt Chung",
   user_type: "Học viên",
   gender: "Nam",
   gender_secure: "Công khai",
   birthday: "2001-12-17",
   birthday_secure: "Công khai",
   classes: [],
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

  const [UserImage, setUserImage] = useState({
    image: null,
    url: values.image,
    progress: 0
  })

const handleChangeImage = e => {
  if (e.target.files[0]) {
      const image = e.target.files[0];
      setUserImage({
        ...UserImage,
        ["image"]:image
      })
      const name = image.name + '-' + Date.now();
      const uploadTask = storage.ref(`images/${name}`).put(image);
      uploadTask.on('state_changed',
      (snapshot) => {
          // progrss function ....
          const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          setUserImage({
            ...UserImage,
            ["progress"]:progress
          })
      },
      (error) => {
          // error function ....
          console.log(error);
          console.log("Here");
      },
      () => {
          // complete function ....
          storage.ref('images').child(name).getDownloadURL().then(url => {
              console.log(url);
              setValues({
                ...values,
                ["image"]: url
              })
              //http://localhost:8000/users/edit-image
              axios.put('http://localhost:8000/users/edit-image', {username: values.username, image: url}).then(res=>{
                const message = res.data;
                if (!message.error){
                  const user = JSON.parse(window.sessionStorage.getItem("user19120000"));
                  user.url = url;
                  //window.sessionStorage.setItem("user19120000", values);
                  //console.log(user);
                  alert("Cập nhật ảnh thành công!");
                }
              }
              )
          })
      });
      // Post then change 2 link
  }
}

  useEffect(() => {
    const user = JSON.parse(window.sessionStorage.getItem('user19120000'));
    //console.log(user);
     const fetchData = async() => {    
      axios.post('http://localhost:8000/users/profile', {username: user.username }).then(res => {//   https://localhost:8000/ + user_type + edit
      const data = res.data;
      //alert("Im, here");
      console.log(data);
      //("Im, here");

      //if (!data)
        //return;
      //console.log(data);
      setValues({
        id: user._id,
        image: user.image,
        username: user.username,
        introduce: user.introduce,
        name: user.name,
        user_type: user.user_type,
        gender: user.gender,
        gender_secure: user.gender_secure,
        birthday: user.birthday,
        birthday_secure: user.birthday_secure,
        classes: user.classes,
        major: user.major,
        literacy: user.literacy,
        fee: user.fee,
        address: user.address,
        address_secure: user.address_secure,
        subjects: user.subjects,
        email: user.email,
        email_secure: user.email_secure,
        contact: user.contact,
        contact_secure: user.contact_secure,
    });
   })
   };
   fetchData();
   
}, []);

  return { handleChange, handleSubmit, classesChange,salaryChange, handleChangeImage,  values, errors };
};

export default useForm;
