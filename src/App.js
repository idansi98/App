import './App.css';
import LoginPage from './pages/LoginPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SignUpPage from './pages/SignUpPage';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element ={<SignUpPage />}></Route>
        <Route path="/login" element ={<LoginPage />}></Route>
        <Route path="/" element ={<LoginPage />}></Route>
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
