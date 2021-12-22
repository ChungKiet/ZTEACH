import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
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
    </Routes>
    </div>
    </Router>
  );
}

export default App;
