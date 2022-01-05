import React from 'react'
import './PostsContent.css';
import Search from '../PostListPage/Search';
import Posts from '../PostListPage/Posts';

function PostsContent() {
    return (
      <>
        <Navbar/>
        <Search/>
        <Posts/>
      </>
    );
  }
  
  export default PostsContent;