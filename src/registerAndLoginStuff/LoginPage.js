
import BlueBackground from "./BlueBackGround";
import LoginForm from "./LoginForm";
import { useEffect } from "react";


function LoginPage() {
  useEffect(() => {
    document.title = "Login"
  }, [])
    return ( 
        <>
        <BlueBackground />
        <LoginForm/>
      </>  
    );
}

export default LoginPage;