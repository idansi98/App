
import BlueBackground from "./BlueBackGround";
import LoginForm from "./LoginForm";
import { useEffect } from "react";


function LoginPage() {
  useEffect(() => {
    document.title = "Login"
  }, [])
    return ( 
      <div className="back-container">        
      <div className=" container-fluid front-container no-padding ">
      <BlueBackground />
      </div>
      <div className=" container front-container1">
        <LoginForm />
      </div>
    </div>
    );
}

export default LoginPage;