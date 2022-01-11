import React from 'react'
import './Posts.css';
import Search from './Search';
import PostItem from './PostItem';

function Posts(params) {
    return (
        <div className='posts-grid-main-layout40'>
            <Search/>
            <div className='posts-grid-layout40'>
                <PostItem/>
                <PostItem/>
                <PostItem/>
                <PostItem/>
                <PostItem/>
                <PostItem/>
                <PostItem/>
                <PostItem/>
                <PostItem/>
                <PostItem/>
            </div>
        </div>
    )
}

export default Posts;