import './Forms.css';
import UserNameBox from './UserNameBox';
import PasswordBox from './PasswordBox';
import LoginRegisterBox from './LoginRegisterBox';
import { useState } from "react";

function LoginForm() {

    // useState hook
    const [credentials, setCredentials] = useState({userName:"",displayName:"", password:"", passwordValidator:""});

    return ( 
        <span className="d-flex justify-content-center" id="grayformLogin">
        <form className="grayformLoginInside row g-3 border border-0 bg-light rounded">
          <UserNameBox setCredentials={setCredentials}/>
          <PasswordBox setCredentials={setCredentials}/>
          <LoginRegisterBox credentials={credentials}/>
        </form>
      </span>
    
    );
}

export default LoginForm;