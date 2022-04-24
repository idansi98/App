import LoginForm from "./LoginForm";
import { useEffect } from "react";
import Snackbar from "./snackbar";
import logo from "../Media/logo.png";
import snackbarHelper from "../classes/snackbarHelper";

function LoginPage() {
  useEffect(() => {
    snackbarHelper.setClass("snackbarLoginRegister");
    document.title = "Login";
  }, []);
  return (
    <>
      <img src={logo} id="logoPic" />
      <LoginForm />
      <Snackbar />
    </>
  );
}

export default LoginPage;
