
import UserNameBox from '../typeBoxes/UserNameBox';
import DisplayNameBox from '../typeBoxes/DisplayNameBox';
import PasswordBox from '../typeBoxes/PasswordBox';
import PasswordValidatorBox from '../typeBoxes/PasswordValidatorBox';
import SignUpRegisterBox from '../typeBoxes/SignupRegisterBox';
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
          <SignUpRegisterBox credentials={credentials}/>
        </form>
      </span>
    
    );
}
export default SignUpForm;
