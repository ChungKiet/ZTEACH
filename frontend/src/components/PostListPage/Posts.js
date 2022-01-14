import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Posts.css';
import Search from './Search';
import PostItem from './PostItem';
import validate from './validateInfo';
import axios from 'axios';


import footer_image1 from '../images/searchimg/img1.png';
import footer_image2 from '../images/searchimg/img2.png';
import footer_image3 from '../images/searchimg/img3.png';
import footer_image4 from '../images/searchimg/img4.png';
import footer_image5 from '../images/searchimg/img5.png';


function Posts() {
    var footer_images = [footer_image1, footer_image2, footer_image3, footer_image4, footer_image5];
    var num_footer_image = 5;

    const defaultValues = {
        unstable: false,
        page: "1",
        title: "",
        subject: "",
        grade: "",
        study_form: "",
        lesson: "",
        time: "",
        fee: "",
        literacy: "",
        gender: ""
    };
    const submitForm = () => {
        console.log("Submitted");
    }
    const navigate = useNavigate();
    const [values, setValues] = useState(defaultValues);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
  
    function makeURL() {
        var url = '/post-list?';
        if (values.title !== "") url = url + "title=" + values.title + "&";
        if (values.subject !== "") url = url + "subject=" + values.subject + "&";
        if (values.grade !== "") url = url + "grade=" + values.grade + "&";
        if (values.study_form !== "") url = url + "study_form=" + values.study_form + "&";
        if (values.lesson !== "") url = url + "lesson=" + values.lesson + "&";
        if (values.time !== "") url = url + "time=" + values.time + "&";
        if (values.fee !== "") url = url + "fee=" + values.fee + "&";
        if (values.literacy !== "") url = url + "literacy=" + values.literacy + "&";
        if (values.gender !== "") url = url + "gender=" + values.gender + "&";
        if (values.page !== "") url = url + "page=" + values.page;
        return url;
    }
  
  
  
    const handleChange = e => {
      const { name, value } = e.target;
      setValues({
        ...values,
        [name]: value
      });
    };
  
    const handleChangePage = e => {
      const { name, value } = e.target;
      setValues({
        ...values,
        [name]: value,
        unstable: true
      });
    };
    if (values.unstable) window.location.replace(makeURL());

    const handleDelete = e => {
      setValues({...defaultValues});
    };
  
    const handleSubmit = e => {
      e.preventDefault();
  
      setErrors(validate(values));
      setIsSubmitting(true);

  
  
      window.location.replace(makeURL());
    };







    const [Data, setDatas] = useState({
        number: 0,
        posts: []
    });
    
    


    useEffect(() => {
        const fetchData = async () => {
            const searchURL = 'http://localhost:8000/posts' + window.location.search;

            console.log(searchURL);
            const result = await axios.get(searchURL);

            
            var url = require('url');
            var url_parts = url.parse(searchURL, true);
            var query = url_parts.query;
            var newValues = values;
            var keys = Object.keys(query);
            for (var i=0; i<keys.length; i++){
                var key = keys[i];
                var value = query[key];
                newValues = {...newValues,[key]:value};
            }
            setValues(newValues);


            setDatas(result.data);
        };
        fetchData();
    }, []);
    
    return (
        <div className='posts-grid-main-layout40'>
            <Search params={{handleChange, handleSubmit, handleDelete, values, errors}}/>
            <div className='post-items-list-layout40'>
                <div className='header-frame40'>
                    <div>
                        <div className='title1-40'>Tìm thấy {Data.number} bài đăng</div>
                    </div>
                    <Link to="/tutor-list" className="link446"><button className='button-18'>Danh sách gia sư</button></Link>
                </div>                
                {Data.posts.map(item => (
                    <PostItem params={item}/>
                ))}
                <div className='footer-frame40'>
                    <div className="footer-flex-row40">
                        <div className='title2-40'>Trang </div>
                        <input
                            type="number"
                            className="page-number40"
                            name="page"
                            value={values.page}
                            onChange={handleChangePage}
                        />
                    </div>
                    <img className="user-img-tutor-item40" src={footer_images[Math.floor(Math.random() * num_footer_image)]} />
                </div>
            </div>
        </div>
    )
}

export default Posts;