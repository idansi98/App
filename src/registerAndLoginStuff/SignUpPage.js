
import SignUpForm from "./SignUpForm";
import { useEffect } from "react";
import SmallBlueBackground from "./smallBlueBackground";
import Snackbar from "./snackbar";
import snackbarHelper from "../classes/snackbarHelper";



function SignUpPage() {
  useEffect(() => {
    snackbarHelper.setClass("snackbarLoginRegister")
    document.title = "Sign Up"
  }, [])
  return ( 
    <>
    <SmallBlueBackground />
    <SignUpForm />
    <Snackbar />
    </>
)
}

export default SignUpPage;