import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
import NewPostPage from './components/pages/NewPostPage';
import EditProfilePage from './components/pages/EditProfilePage';
import TutorRegisterPage from './components/pages/TutorRegisterPage';
import ProfilePage from './components/pages/ProfilePage';
import GlobalVar from './GlobalVar';

global.isLogin = true;
var a;
function App() {
  return (
    <Router>
    <div className="App">
    <Routes>
      <Route path="/" exact element={<HomePage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/signup" element={<SignupPage/>}/>
      <Route path="/new-post" element={<NewPostPage/>}/>
      <Route path="/editprofile" element={<EditProfilePage/>}/>
      <Route path="/updatetotutor" element={<TutorRegisterPage/>}/>
      <Route path="/profileuser" element={<ProfilePage/>}/>
    </Routes>
    </div>
    </Router>
  );
}

export default App;
