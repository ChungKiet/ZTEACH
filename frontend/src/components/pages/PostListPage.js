import React from 'react';
import '../../App.css';
import Navbar from '../Navbar';
import Search from '../PostListPage/Search';
import Posts from '../PostListPage/Posts';
function HomePage() {
  return (
    <>
      <Navbar/>
      <Search/>
    </>
  );
}

export default HomePage;
