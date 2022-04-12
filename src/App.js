import './App.css';
import LoginPage from './pages/LoginPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SignUpPage from './pages/SignUpPage';
import {useState} from 'react';
import ChatPage from './pages/ChatPage';

function App() {

  global.token = 0;
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/chats" element ={<ChatPage />}></Route>
        <Route path="/signup" element ={<SignUpPage />}></Route>
        <Route path="/login" element ={<LoginPage/>}></Route>
        <Route path="/" element ={<LoginPage/>}></Route>
      </Routes>
    </BrowserRouter>
    
    
  );
}

export default App;
