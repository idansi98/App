
import SignUpForm from "./SignUpForm";
import { useEffect } from "react";
import SmallBlueBackground from "./smallBlueBackground";



function SignUpPage() {
  useEffect(() => {
    document.title = "Sign Up"
  }, [])
  return ( 
    <>
    <SmallBlueBackground />
    <SignUpForm />
    </>
)
}

export default SignUpPage;