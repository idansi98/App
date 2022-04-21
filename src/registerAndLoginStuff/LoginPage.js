
import LoginForm from "./LoginForm";
import { useEffect } from "react";
import SmallBlueBackground from "./smallBlueBackground";


function LoginPage() {
  useEffect(() => {
    document.title = "Login"
  }, [])
    return ( 
      <>
      <SmallBlueBackground />
      <LoginForm />
      </>


    );
}

export default LoginPage;