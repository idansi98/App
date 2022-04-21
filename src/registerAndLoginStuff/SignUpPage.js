
import BlueBackground from "./BlueBackGround";
import SignUpForm from "./SignUpForm";
import { useEffect } from "react";



function SignUpPage() {
  useEffect(() => {
    document.title = "Sign Up"
  }, [])
  return ( 
    <div className="back-container">        
    <div className=" container-fluid front-container no-padding ">
    <BlueBackground />
    </div>
    <div className=" container front-container1">
      <SignUpForm />
    </div>
  </div> )
}

export default SignUpPage;