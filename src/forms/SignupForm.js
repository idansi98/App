
import UserNameBox from '../UserNameBox/UserNameBox';
import DisplayNameBox from '../DisplayNameBox/DisplayNameBox';
import PasswordBox from '../PasswordBox/PasswordBox';
import PasswordValidatorBox from '../PasswordValidatorBox/PasswordValidatorBox';
import LoginRegisterBox from '../loginRegisterBox/LoginRegisterBox';
import { useState } from "react";

function SignUpForm() {

    // useState hook
    const [credentials, setCredentials] = useState({userName:"",displayName:"", password:"", passwordValidator:""});

    return ( 
        <span className="d-flex justify-content-center" id="grayform">
        {/*The 5 rows form to enter userName, displayName, password, passwordValidator, loging in, and signing up*/}
        <form className="row g-3 w-75 border border-0 bg-light mt-5 mb-3 rounded">
          <UserNameBox setCredentials={setCredentials}/>
          <DisplayNameBox setCredentials={setCredentials}/>
          <PasswordBox setCredentials={setCredentials}/>
          <PasswordValidatorBox setCredentials={setCredentials}/>  
          <LoginRegisterBox credentials={credentials}/>
        </form>
      </span>
    
    );
}