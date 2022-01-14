import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Tutors.css';
import Search from './Search';
import TutorItem from './TutorItem';
import validate from './validateInfo';
import axios from 'axios';


function Tutors() {
    const defaultValues = {
        page: "1",
        name: "",
        subject: "",
        grade: "",
        literacy: "",
        gender: "",
        older: "",
        younger: "",
        fee: "",
        exp: "",
        rate: "",
    };
    const submitForm = () => {
        console.log("Submitted");
    }
    const navigate = useNavigate();
    const [values, setValues] = useState(defaultValues);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
  
  
  
    const handleChange = e => {
      const { name, value } = e.target;
      setValues({
        ...values,
        [name]: value
      });
    };

    const handleDelete = e => {
      setValues({...defaultValues, ["page"]: values.page});
    };
  
    const handleSubmit = e => {
      e.preventDefault();
  
      setErrors(validate(values));
      setIsSubmitting(true);
  
      var url = '/tutor-list?';
      if (values.name !== "") url = url + "name=" + values.name + "&";
      if (values.subject !== "") url = url + "subject=" + values.subject + "&";
      if (values.grade !== "") url = url + "grade=" + values.grade + "&";
      if (values.literacy !== "") url = url + "literacy=" + values.literacy + "&";
      if (values.gender !== "") url = url + "gender=" + values.gender + "&";
      if (values.older !== "") url = url + "older=" + values.older + "&";
      if (values.younger !== "") url = url + "younger=" + values.younger + "&";
      if (values.fee !== "") url = url + "fee=" + values.fee + "&";
      if (values.exp !== "") url = url + "exp=" + values.exp + "&";
      if (values.rate !== "") url = url + "rate=" + values.rate + "&";
      if (values.page !== "") url = url + "page=" + values.page;
  
  
      window.location.replace(url);
    };
  




    const [Data, setDatas] = useState({
        number: 0,
        posts: []
    });
    
    useEffect(() => {
        const fetchData = async () => {
            const searchURL = 'http://localhost:8000/tutors' + window.location.search;

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
                        <div className='title1-40'>Tìm thấy {Data.number} gia sư</div>
                    </div>
                    <Link to="/post-list" className="link446"><button className='button-18'>Danh sách bài đăng</button></Link>
                </div>
                {Data.posts.map(item => (
                    <TutorItem params={item}/>
                ))}
            </div>
        </div>
    )
}

export default Tutors;