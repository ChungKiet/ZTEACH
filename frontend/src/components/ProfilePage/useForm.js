import { useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import GlobalVar from '../../GlobalVar';
import { data } from 'jquery';
import { storage } from '../../firebase';
import './Profile.css';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
   id: "",
   image: "",
   username: "",
   introduce: "No intro",
   name: "Kiệt Chung",
   user_type: "",
   gender: "Nam",
   gender_secure: "Công khai",
   birthday: "2001-12-17",
   rate: "4.5",
   evaluate: "10",
   dayreg: "2022-01-04",
   birthday_secure: "Công khai",
   subjects: ["Toán, Lý"],
   classes: ["Lớp 1", "Lớp 2"],
   major: "CNTT",
   literacy: "Sinh viên",
   fee: "",
   address: "No address",
   address_secure: "Công khai",
   email: "No email",
   email_secure: "Công khai",
   contact: "No Contact",
   contact_secure: "Công khai",
   certificate: [],
 });

    // useEffect(()=>{
      const URL = window.location.pathname;
      const tmp = URL.split('/');
      const username = tmp[tmp.length - 1];
      const user = JSON.parse(window.sessionStorage.getItem('user19120000'));
    // })
    var isHolderAccount = false;
    if (!user){
      isHolderAccount = false;
    }
    else if (user.username === username){
      isHolderAccount = true;
    }
  // set listRequest after render
  // return VALUES for PROFILE
  // IF xóa tính sau
  // 
  const [errors, setErrors] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
    if(true){
    //if (!errors.isError) {
      const user_type = GlobalVar.user.user_type === "student"? "users": "tutors";
      axios.post("http://localhost:8000/" + user_type + GlobalVar.user.username, values).then(res => {
        const { isSucceeded } = res.data;
        if (isSucceeded === true) {
            alert("Cập nhật thông tin thành công!")
        }
        else{
          alert("Thất bại!")
        }
    });
    }
  };
  function Evaluate(){
    return (
      <div class="rate">
        Đánh giá của bạn: 
        <input type="radio" id="star5" name="rate" value="5" />
        <label for="star5" title="text">5 stars</label>
        <input type="radio" id="star4" name="rate" value="4" />
        <label for="star4" title="text">4 stars</label>
        <input type="radio" id="star3" name="rate" value="3" />
        <label for="star3" title="text">3 stars</label>
        <input type="radio" id="star2" name="rate" value="2" />
        <label for="star2" title="text">2 stars</label>
        <input type="radio" id="star1" name="rate" value="1" />
        <label for="star1" title="text">1 star</label>
      </div>
    )
  }

  const checkValue = (data) => {
      var get_id =data._id;
      var get_username =  data.username;
      var get_intro =  data.introduce;
      var get_name =  data.name;
      var get_user_type =  data.user_type;
      var get_gender = data.gender;
      var get_gender_secure = data.gender_secure;
      var get_birth_day = data.birthday;
      var get_birth_day_secure = data.birthday_secure;
      var get_classes = data.classes;
      var get_major = data.major;
      var get_literacy = data.literacy;
      var get_fee = data.fee;
      var get_address = data.address;
      var get_address_secure = data.address_secure;
      var get_subjects =  data.subjects;
      var get_email = data.email;
      var get_email_secure = data.email_secure;
      var get_contact = data.contact;
      var get_contact_secure = data.contact_secure;
      var get_rate = data.rate;
      var get_image = data.image;
      var get_dayReg = data.timestamps;
      var get_cert = data.certificate;
      var get_created_at = data.createdAt;
      // Toàn bộ check trong hàm này
      // Tùy vào người dùng sẽ được thiết lập khác nhau
      // Khi sang trang edit profile thì phải load lần nữa chính nó
      // if ()
      // 
      var isLogin = true;
      const user = JSON.parse(window.sessionStorage.getItem("user19120000"));
      var isYourSelf = false;
      if (!user) isLogin = false;
      else if (user.username === get_username) isYourSelf = true;
      // Xet login
      if (isHolderAccount)
        isYourSelf = true;
      else if (connectState!=2){
        // Neu chua login thì ko hien thi neu o che do "Bao mat"
        if (get_gender_secure==="Bảo mật"){
          get_gender = "Đã bị ẩn";
        }  
        if (get_birth_day_secure==="Bảo mật"){
          get_birth_day = "Đã bị ẩn";
        }
        if (get_address_secure==="Bảo mật"){
          get_address = "Đã bị ẩn";
        }
        if (get_email_secure==="Bảo mật"){
          get_email = "Đã bị ẩn";
        }
        if (get_contact_secure==="Bảo mật"){
          get_contact = "Đã bị ẩn";
        }   
      else if (isLogin && !isYourSelf){
        // Neu da dang nhap
        // Neu set rieng thu thi set = "Da bi an"
        if (get_gender_secure==="Riêng tư"){
          get_gender = "Đã bị ẩn";
        }  
        if (get_birth_day_secure==="Riêng tư"){
          get_birth_day = "Đã bị ẩn";
        }
        if (get_address_secure==="Riêng tư"){
          get_address = "Đã bị ẩn";
        }
        if (get_email_secure==="Riêng tư"){
          get_email = "Đã bị ẩn";
        }
        if (get_contact_secure==="Riêng tư"){
          get_contact = "Đã bị ẩn";
        }
      }
    }

      setValues({
        id: get_id,
        image: get_image,
        username: get_username,
        introduce: get_intro,
        name: get_name,
        user_type: get_user_type,
        gender: get_gender,
        gender_secure: get_gender_secure,
        birthday: get_birth_day,
        birthday_secure: get_birth_day_secure,
        classes: get_classes,
        major: get_major,
        literacy: get_literacy,
        fee: get_fee,
        address: get_address,
        address_secure: get_address_secure,
        subjects: get_subjects,
        email: get_email,
        email_secure: get_email_secure,
        contact: get_contact,
        contact_secure: get_contact_secure,
        rate: get_rate,
        dayreg: get_dayReg,
        certificate: get_cert,
        createdAt: get_created_at
      });
      var res = [];
      // var temp = {id: -1, imgUrl: values.image}
      if (get_user_type!=="tutor")
        return;
      for (let i = 0; i < get_cert.length; i++){
        res.push({id: i + 1, imgUrl: get_cert[i]});
      }
      setPics(res);
  }

  const [CertImage, setCertImage] = useState({
    image: null,
    url: values.image,
    progress: 0
  })

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
                    window.location.reload('/profile/' + user.username);
                  //window.sessionStorage.setItem("user19120000", values);
                  }
                }
                )
            })
        });
        // Post then change 2 link
    }
  }

  const removeImage = (id) => {
    // this is the line that you are looking for
    var item = "";
    for (let i = 0; i < values.certificate.length; i++)
      if (pics[i]["id"]===id || pics[i]["id"]===id.toString())
        item = pics[i]["imgUrl"];
    if (item!==""){
      axios.put('http://localhost:8000/tutors/remove-certificate', {username: user.username, image: item}).then(res=>{
        const err = res.data;
        if (!err.error)
          alert("Xóa image thành công!");
          window.location.reload('/profile/' + user.username);
      })
    }

    setPics((oldState) => oldState.filter((item) => item.id !== id));
  };

  const [pics, setPics] = useState([]);
  const [connectState, setConnectState] = useState(-1)
  
  function UserPost(props) {
    const {order, id, title, dayPost} = props;
    //const { order, username, level, gender } = props;

    return (
        <div className="flex-request-line-553">
            <div className="request-no-553">{order}</div>
            <div className="request-username-553">
                <a href={'http://localhost:3000/post/' + id} 
                style={{ 'text-decoration': 'none',
                      overflow: 'hidden',
                      maxWidth: "10px"
                }}>
                  {title}
                </a>
            </div>
            <div className="request-level-553">{dayPost.substring(0, 10)}</div>
        </div>
    );
  }

  
  function RequestSummaryLine(props) {
    const { order, username, dayRequest } = props;
    const user = JSON.parse(window.sessionStorage.getItem("user19120000"));
    return (
        <div className="flex-request-line-553">
            <div className="request-no-553">{order}</div>
            <div className="request-username-553">
                <a href={`http://localhost:3000/profile/${username}`} style={{marginLeft: "5%" , textDecoration: 'none' }}>{username}</a>
            </div>
            <div className="request-time-553">{dayRequest}</div>
            <div className="request-accept-553">
                <button className="button-request-accept-553" onClick={() => {
                    axios.put("http://localhost:8000/connects/accept-connect", { user: username, tutor: user.username })
                        .then(window.location.reload(`/profile/${username}`)
                        )
                }} >
                    <div className="request-button-553">
                        Chấp nhận
                    </div>
                </button>
            </div>
            <div className="request-deny-553">
                <button className="button-request-deny-553" onClick={() => {
                    axios.delete("http://localhost:8000/connects/delete-tutor-connect",{data: { user:username, tutor: user.username}}).then(
                        res => {
                            if (res.data.result === 1) {
                                alert('Đã xóa yêu cầu');
                                window.location.reload(`/profile/${username}`);
                            } else {
                                alert('Đã xảy ra lỗi khi xóa yêu cầu. Thử lại sau.');
                            }
                        }
                    );
                }} >
                    <div className="request-deny-553">
                        Từ chối
                    </div>
                </button>
            </div>
        </div>
    );
  }

  const removeCert = () => {
    
  }
function ButtonConnect() {
  if (user===null)
      return null;
  if (user.username === null)
      return null;
  if (user.user_type !== "tutor")
      return null;
  if (user.username === values.username)
      return null

  else if (connectState === 2 || connectState === "2")
      return (
      
          <div className="button-connected-553">
              <div className="button-connect-text-553">
                Đã kết nối
              </div>
          </div>
          
      )
  else if (connectState === 1 || connectState === "1")
      return (
          <button className="button-requested-553" onClick={() => {
              axios.delete("http://localhost:8000/connects/delete-tutor-connect", { user: user.username, tutor: values.username}).then(
                  res => {
                      if (res.data.result === 1) {
                          alert('Đã hủy yêu cầu');
                          window.location.reload(`/users/${username}`);
                      } else {
                          alert('Đã xảy ra lỗi khi hủy yêu cầu. Thử lại sau.');
                      }
                  }
              );
          }}>
              <div className="button-connect-text-553">
                  Đang yêu cầu kết nối
              </div>
              
          </button>
          
      );
  else if (connectState === 0 || connectState === "0") {
      return (
          <button className="button-connect-553" onClick={() => {
              axios.post("http://localhost:8000/connects/new-tutor-connect", { user: user.username, tutor: values.username}).then(
                  res => {
                      if (res.data.result === 1) {
                          alert('Đã yêu cầu kết nối để nhận lớp!');
                          window.location.reload(`/users/${username}`);
                      } else {
                          alert('Đã xảy ra lỗi khi gửi yêu cầu. Thử lại sau.');
                      }
                  }
              );
          }}>
              <div className="button-connect-text-553">
                  Kết nối với gia sư này
              </div>
          </button>
      );
  }
  else return null;

  }

  function RequestListConnect() {
    // Guest - restricted infomation
    if (user === null)
        return null
    if (user.username === values.username)
        // OWN - Not have accepted connection with any tutor
        return (
            <div>
                <div className="overlap-group-requests-553">
                    <div className="box-outline-553"></div>
                    <div className="flex-request-heads-553">
                        <div className="request-no-553">STT</div>
                        <div className="request-username-553">Tài khoản</div>
                        <div className="request-level-553">Ngày yêu cầu</div>
                    </div>
                    <div className="request-list-553">
                        {listRequest.map((v, index) => (
                            <RequestSummaryLine order={index + 1} username={v.user} dayRequest={v.timer.substring(0, 10)}></RequestSummaryLine>))}
                    </div>
                </div>
            </div>)
        else
        // The tutor that has been accepted
        return null;
  }

  const [listRequest, setRequest] = useState([]);
  useEffect(()=>{
    const URL = window.location.pathname;
    const tmp = URL.split('/');
    const username = tmp[tmp.length - 1];
    const user = JSON.parse(window.sessionStorage.getItem('user19120000'));
    var isLogin = true;
    var isYourSelf = false;
    if (!user) isLogin = false;
    else if (user.username === username) isYourSelf = true;
    if (!isLogin) return;
    if (isYourSelf) return;
    const fetchData = async() => {  
      axios.post('http://localhost:8000/connects/get-tutor-state', {tutor: username, user: user.username }).then(res => {//   https://localhost:8000/ + user_type + edit
      const data = res.data;

      setConnectState(data.state);
    })
  }
  fetchData();
  })
  
  useEffect(() =>{
    const URL = window.location.pathname;
    const tmp = URL.split('/');
    const username = tmp[tmp.length - 1];
    const user = JSON.parse(window.sessionStorage.getItem('user19120000'));
    if (!user){
      isHolderAccount = false;
    }
    else if (user.username === username){
      isHolderAccount = true;
    }
    
    const fetchData = async() => {  
      axios.post('http://localhost:8000/connects/get-tutor-connect', {tutor: username }).then(res => {//   https://localhost:8000/ + user_type + edit
      const data = res.data;
      for (let i = 0; i < data.length; i++){
        data[i]["order"] = i + 1;
      }
      setRequest(data);
     })
     
     }
     fetchData();
  }, [])


  const [listPost, setPostList] = useState([]);
  useEffect(() =>{
    // Get user post
    //http://localhost:8000/posts
    const URL = window.location.pathname;
    const tmp = URL.split('/');
    const username = tmp[tmp.length - 1];
    const user = JSON.parse(window.sessionStorage.getItem('user19120000'));
    
    const fetchData = async() => {   
      axios.post('http://localhost:8000/posts/user-post', {username: username }).then(res => {//   https://localhost:8000/ + user_type + edit
      const data = res.data;
      for (let i = 0; i < data.length; i++){
        data[i]["order"] = i + 1;
      }
      setPostList(data.map(v => (
        <UserPost id={v._id} title={v.title} dayPost={v.createdAt} order={v.order}></UserPost>
      )));
     
     })
     // Cho chỉnh sửa hay ko là việc của UI
     //
     }
     fetchData();
  }, [])

  useEffect(() => {
  const URL = window.location.pathname;
  const tmp = URL.split('/');
  const username = tmp[tmp.length - 1];
  const user = JSON.parse(window.sessionStorage.getItem('user19120000'));
   const fetchData = async() => {    
    axios.post('http://localhost:8000/users/profile', {username: username }).then(res => {//   https://localhost:8000/ + user_type + edit
    const data = res.data;
    if (!data)
      return;
   checkValue(data);
  })
   axios.post('http://localhost:8000/tutors/profile', {username: username }).then(res => {//   https://localhost:8000/ + user_type + edit
   const data = res.data;
   if (!data)
     return;
  checkValue(data);
})
   };
   fetchData();
   
}, []);

  const [UserImage, setUserImage] = useState({
      image: null,
      url: 'https://firebasestorage.googleapis.com/v0/b/zteach-images.appspot.com/o/images%2Fprofile.png?alt=media&token=34e94b8d-cda6-4df8-8f4b-88a022d3b3fe',
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
        },
        () => {
            // complete function ....
            storage.ref('images').child(name).getDownloadURL().then(url => {
                setValues({
                  ...values,
                  ["image"]: url
                })
                const user = JSON.parse(window.sessionStorage.getItem("user19120000"));
                user.url = url;
                window.sessionStorage.setItem("user19120000", JSON.parse(values));
                //http://localhost:8000/users/edit-image
                axios.put('http://localhost:8000/users/edit-image', {username: values.username, image: url}).then(res=>{
                  const message = res.data;
                  if (!message.error){
                    
                  alert("Cập nhật ảnh thành công!");
                  }
                }
                )
            })
        });
        // Post then change 2 link
    }
}


  return { handleSubmit , handleChangeImage, ButtonConnect, RequestListConnect, setPics, removeImage, handleChangeCert, pics, listPost, listRequest, values, errors };
};

export default useForm;
