import SignUpForm from "./SignUpForm";
import { useEffect } from "react";
import logo from "../Media/logo.png";
import SmallBlueBackground from "./smallBlueBackground";
import Snackbar from "./snackbar";
import snackbarHelper from "../classes/snackbarHelper";

function SignUpPage() {
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
