import "./Forms.css";
import UserNameBox from "./UserNameBox";
import DisplayNameBox from "./DisplayNameBox";
import PasswordBox from "./PasswordBox";
import PasswordValidatorBox from "./PasswordValidatorBox";
import SignUpRegisterBox from "./SignupRegisterBox";
import PhotoUploaderBox from "./PhotoUploaderBox";
import defaultPFP from "../Media/defaultPFP.png";
import { useState } from "react";

//This component returns the whole SignUpForm.
function SignUpForm() {
  //We use the useState hook to set the credentials.
  const [credentials, setCredentials] = useState({
    userName: "",
    displayName: "",
    password: "",
    passwordValidator: "",
    photo: defaultPFP,
  });

  return (
    <span className="d-flex justify-content-center" id="grayformRegister">
      <form className="grayformRegisterInside g-3 border border-0 rounded">
        <UserNameBox setCredentials={setCredentials} />
        <DisplayNameBox setCredentials={setCredentials} />
        <PasswordBox setCredentials={setCredentials} />
        <PasswordValidatorBox setCredentials={setCredentials} />
        <PhotoUploaderBox
          setCredentials={setCredentials}
          credentials={credentials}
        />
        <SignUpRegisterBox credentials={credentials} />
      </form>
    </span>
  );
}
export default SignUpForm;
