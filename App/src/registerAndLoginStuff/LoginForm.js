import "./Forms.css";
import UserNameBox from "./UserNameBox";
import PasswordBox from "./PasswordBox";
import LoginRegisterBox from "./LoginRegisterBox";
import { useState } from "react";

//This component returns the Login form.
function LoginForm() {
  //We use the useState hook to set the credentials.
  const [credentials, setCredentials] = useState({
    userName: "",
    displayName: "",
    password: "",
    passwordValidator: "",
  });

  return (
    <span className="d-flex justify-content-center" id="grayformLogin">
      <form className="grayformLoginInside g-3 border border-0 rounded">
        <UserNameBox setCredentials={setCredentials} />
        <PasswordBox setCredentials={setCredentials} />
        <LoginRegisterBox credentials={credentials} />
      </form>
    </span>
  );
}

export default LoginForm;
