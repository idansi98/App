import './Forms.css';
import UserNameBox from './UserNameBox';
import DisplayNameBox from './DisplayNameBox';
import PasswordBox from './PasswordBox';
import PasswordValidatorBox from './PasswordValidatorBox';
import SignUpRegisterBox from './SignupRegisterBox';
import PhotoUploaderBox from './PhotoUploaderBox';
import { useState } from "react";

function SignUpForm() {

    // useState hook
    const [credentials, setCredentials] = useState({userName:"",displayName:"", password:"", passwordValidator:"", photo:"defaultPFP.png"});

    return ( 
        <span className="d-flex justify-content-center" id="grayformRegister">
        <form className="grayformRegisterInside g-3 border border-0 bg-light rounded">
          <UserNameBox setCredentials={setCredentials}/>
          <DisplayNameBox setCredentials={setCredentials}/>
          <PasswordBox setCredentials={setCredentials}/>
          <PasswordValidatorBox setCredentials={setCredentials}/> 
          <PhotoUploaderBox setCredentials={setCredentials} credentials={credentials}/>
          <SignUpRegisterBox credentials={credentials}/>
        </form>
      </span>
    );
}
export default SignUpForm;
