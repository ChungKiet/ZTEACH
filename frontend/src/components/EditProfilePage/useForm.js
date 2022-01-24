import { useState, useEffect } from 'react';
import axios from 'axios';
import GlobalVar from '../../GlobalVar';
import { useNavigate } from 'react-router-dom';
import { storage } from '../../firebase';

const useForm = (callback, validate) => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    image:"",
   id: "",
   username: "KietChung",
   introduce: "No intro",
   name: "Kiệt Chung",
   user_type: "",
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
   certificate: [],
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

  const ArrAdapter = (e) =>{
    var res = [];
    for (let i = 0; i < e.length; i++)
      res.push(e[i]["value"]);
    return res;
  }

  const [classesLabel, setClassLabel] = useState([]);
  const classesChange = e => {
   setClassLabel(e);
   setValues({
     ...values,
     ["classes"]: ArrAdapter(e)
   });
 };

 const [subjectLabel, setSubLabel] = useState([]);
 const subjectChange = e => {
  setSubLabel(e);
  setValues({
    ...values,
    ["subjects"]: ArrAdapter(e)
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
      })
    }
  };

  const [UserImage, setUserImage] = useState({
    image: null,
    url: values.image,
    progress: 0
  })

  const [CertImage, setCertImage] = useState({
    image: null,
    url: values.image,
    progress: 0
  })
  //handleUploadTutorImage

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
   const user_type = user.user_type === "student"? "users": "tutors";
   console.log(user);
   const fetchData = async() => {
       //const usertype = GlobalVar.user.user_type === "Học viên"? "user" : "tutor";
       axios.post('http://localhost:8000/'+ user_type +'/profile', {username: user.username}).then(res => {//   https://localhost:8000/ + user_type + edit
       const dt = res.data;
       console.log(dt);
       setValues({
         id: dt._id,
         image: dt.image,
         username: dt.username,
         introduce: dt.introduce,
         name: dt.name,
         user_type: dt.user_type,
         gender: dt.gender,
         gender_secure: dt.gender_secure || 'Công khai',
         birthday: dt.birthday,
         birthday_secure: dt.birthday_secure || 'Công khai',
         classes: dt.classes || [],
         major: dt.major || '',
         literacy: dt.literacy || 'Sinh viên',
         fee: dt.fee || '',
         address: dt.address || '',
         address_secure: dt.address_secure || 'Công khai',
         subjects: dt.subjects,
         email: dt.email,
         email_secure: dt.email_secure || 'Công khai',
         contact: dt.contact,
         contact_secure: dt.contact_secure || 'Công khai',
         voting: dt.voting,
         certificate: dt.certificate || [],
       });
      //  window.sessionStorage.setItem("user19120000", JSON.stringify(values));
      })
   };
   fetchData();
   if (Object.keys(errors).length === 0 && isSubmitting) {
    callback();
  }   
}, [errors]);

const handleChangeCert = e => {
  if (e.target.files[0]) {
      const image = e.target.files[0];
      setCertImage({
        ...CertImage,
        ["image"]:image
      })
      const name = image.name + '-' + Date.now();
      const uploadTask = storage.ref(`images/${name}`).put(image);
      uploadTask.on('state_changed',
      (snapshot) => {
          // progrss function ....
          const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          setCertImage({
            ...CertImage,
            ["progress"]:progress
          })
      },
      (error) => {
          // error function ....
          console.log(error);
      },
      () => {
          // complete function ....
          storage.ref('images').child(name).getDownloadURL().then(url => {
              setValues({
                ...values,
                ["certificate"]: values.certificate.push(url)
              })
              //http://localhost:8000/users/edit-image
              axios.put('http://localhost:8000/tutors/add-certificate',{username: values.username, image: url}).then(res=>{
                const message = res.data;
                if (!message.error){
                  alert('Cập nhật bằng cấp thành công')
                //window.sessionStorage.setItem("user19120000", values);
                }
              }
              )
          })
      });
      // Post then change 2 link
  }
}

  return { handleChange, handleSubmit, subjectChange, classesChange, salaryChange, handleChangeCert, handleChangeImage, classesLabel, subjectLabel, values, errors };
};

export default useForm;
