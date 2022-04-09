
import GreenBackground from "../greenBackground/GreenBackGround";
import LoginForm from "../forms/LoginForm";
import { useState } from "react";

function LoginPage() {

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  
    return ( 
        <>
        <GreenBackground />
        <LoginForm />
      </>  
    );
}

export default LoginPage;