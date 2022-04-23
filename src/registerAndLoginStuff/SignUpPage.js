import SignUpForm from "./SignUpForm";
import { useEffect } from "react";
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
      <img src="logo.png" id="logoPic" />
      <SignUpForm />
      <Snackbar />
    </>
  );
}

export default SignUpPage;
