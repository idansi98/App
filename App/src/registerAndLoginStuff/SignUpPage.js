import SignUpForm from "./SignUpForm";
import { useEffect } from "react";
import logo from "../Media/logo.png";
import Snackbar from "./snackbar";
import snackbarHelper from "../classes/snackbarHelper";

//This component returns the SignUp page.
function SignUpPage() {
  //We used useEffect hook as lambda function here so We could set the snackbar after the html is set.
  useEffect(() => {
    snackbarHelper.setClass("snackbarLoginRegister");
    document.title = "Sign Up";
  }, []);
  return (
    <>
      <img src={logo} id="logoPic" />
      <SignUpForm />
      <Snackbar />
    </>
  );
}

export default SignUpPage;
