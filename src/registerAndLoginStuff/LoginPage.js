
import LoginForm from "./LoginForm";
import { useEffect } from "react";
import SmallBlueBackground from "./smallBlueBackground";
import Snackbar from "./snackbar";
import snackbarHelper from "../classes/snackbarHelper";


function LoginPage() {
  useEffect(() => {
    snackbarHelper.setClass("snackbarLoginRegister")
    document.title = "Login"
  }, [])
    return ( 
      <>
      <SmallBlueBackground />
      <LoginForm />
      <Snackbar />
      </>


    );
}

export default LoginPage;