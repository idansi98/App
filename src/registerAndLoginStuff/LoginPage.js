import LoginForm from "./LoginForm";
import { useEffect } from "react";
import SmallBlueBackground from "./smallBlueBackground";
import Snackbar from "./snackbar";
import snackbarHelper from "../classes/snackbarHelper";

function LoginPage() {
  useEffect(() => {
    snackbarHelper.setClass("snackbarLoginRegister");
    document.title = "Login";
  }, []);
  return (
    <>
      <img src="logo.png" id="logoPic" />
      <LoginForm />
      <Snackbar />
    </>
  );
}

export default LoginPage;
