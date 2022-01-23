import './App.css';
import React, {useState, useEffect} from 'react';
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
import TutorListPage from './components/pages/TutorListPage';
import NotFoundPage from './components/pages/NotFoundPage';
import ImageUpload from './components/upload';
import { isLogin } from './GlobalVar';


// GlobalVar.isLogin = true;
var a;
function App() {
  <script crossorigin src="..."></script>
  window.sessionStorage.setItem("isLogin", "false");

  useEffect(() => {
    document.title = "ZTeach"
  }, []);

  return (
    <div>
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
          <Route path="/tutor-list" element={<TutorListPage />} />
          <Route path="/upload" element={<ImageUpload />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
