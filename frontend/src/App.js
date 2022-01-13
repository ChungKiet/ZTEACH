import './App.css';
import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
import NewPostPage from './components/pages/NewPostPage';
import PostPage from './components/pages/PostPage';
import EditPostPage from './components/pages/EditPostPage';
import EditProfilePage from './components/pages/EditProfilePage';
import TutorRegisterPage from './components/pages/TutorRegisterPage';
import ProfilePage from './components/pages/ProfilePage';
import PostListPage from './components/pages/PostListPage';
import ImageUpload from './components/upload';

// GlobalVar.isLogin = true;
var a;
function App() {
  window.sessionStorage.setItem("isLogin", false);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/edit-post" element={<EditPostPage />} />
          <Route path="/new-post" element={<NewPostPage />} />
          <Route path="/post/*" element={<PostPage />} />
          <Route path="/editprofile" element={<EditProfilePage />} />
          <Route path="/register-tutor" element={<TutorRegisterPage />} />
          <Route path="/profile/*" element={<ProfilePage />} />
          <Route path="/post-list" element={<PostListPage />} />
          <Route path="/upload" element={<ImageUpload />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
