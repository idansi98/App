import './Forms.css';
import UserNameBox from '../typeBoxes/UserNameBox';
import PasswordBox from '../typeBoxes/PasswordBox';
import LoginRegisterBox from '../typeBoxes/LoginRegisterBox';
import { useState } from "react";

function LoginForm() {

    // useState hook
    const [credentials, setCredentials] = useState({userName:"",displayName:"", password:"", passwordValidator:""});

    return ( 
        <span className="d-flex justify-content-center" id="grayform">
        {/*The 3 rows form to enter userName, password, loging in, and signing up*/}
        <form className="row g-3 w-75 border border-0 bg-light mt-5 mb-3 rounded">
          <UserNameBox setCredentials={setCredentials}/>
          <PasswordBox setCredentials={setCredentials}/>
          <LoginRegisterBox credentials={credentials}/>
        </form>
      </span>
    
    );
}

export default LoginForm;