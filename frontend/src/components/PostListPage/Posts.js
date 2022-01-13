import React, {useState, useEffect} from 'react'
import './Posts.css';
import Search from './Search';
import PostItem from './PostItem';
import useForm from './useForm'
import validate from './validateInfo';
import axios from 'axios';


function Posts() {
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

            console.log('http://localhost:8000/posts' + query);
            const result = await axios.get('http://localhost:8000/posts' + query)

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
                    <PostItem params={item}/>
                ))}
            </div>
        </div>
    )
}

export default Posts;