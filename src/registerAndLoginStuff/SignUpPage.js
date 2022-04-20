
import BlueBackground from "./BlueBackGround";
import SignUpForm from "./SignUpForm";
import { useEffect } from "react";



function SignUpPage() {
  useEffect(() => {
    document.title = "Sign Up"
  }, [])
    return ( 
        <>
        <BlueBackground/>
        <SignUpForm />
      </>  
    );
}

export default SignUpPage;