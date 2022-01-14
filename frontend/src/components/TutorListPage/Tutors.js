import React, {useState, useEffect} from 'react'
import './Tutors.css';
import Search from './Search';
import TutorItem from './TutorItem';
import useForm from './useForm'
import validate from './validateInfo';
import axios from 'axios';


function Tutors() {
    const submitForm = () => {
        console.log("Submitted");
    }
    const { handleChange, handleSubmit, values, errors } = useForm(
        submitForm,
        validate
    );


    const [Data, setDatas] = useState({
        number: 0,
        posts: []
    });
    
    useEffect(() => {
        const fetchData = async () => {
            const query = window.location.search;

            console.log('http://localhost:8000/tutors' + query);
            const result = await axios.get('http://localhost:8000/tutors' + query);

            console.log(result.data);
            setDatas(result.data);
        };
        fetchData();
    }, []);
    
    return (
        <div className='posts-grid-main-layout40'>
            <Search params={{handleChange, handleSubmit, values, errors}}/>
            <div className='post-items-list-layout40'>
                {Data.posts.map(item => (
                    <TutorItem params={item}/>
                ))}
            </div>
        </div>
    )
}

export default Tutors;