import "./Button.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import snackbarHelper from "../classes/snackbarHelper";

//This component returns the SignUpRegisterBox.
function SignUpRegisterBox({ credentials }) {
  const navigate = useNavigate();
  //We validate if all the data entered by the user is valid.
  function validate() {
    if (
      isSamePassword(credentials.password, credentials.passwordValidator) &&
      isPasswordValidLength(credentials.password) &&
      isUserNameValid(credentials.userName) &&
      isDisplayNameValid(credentials.displayName) &&
      isPasswordValid(credentials.password) 
    ) {

      const headers = new Headers();
      headers.append('content-type', 'application/json');

      const body = `{"ID":"${credentials.userName}","Password":"${credentials.password}","DisplayName":"${credentials.displayName}"}`;

      const init = {
        method: 'POST',
        headers,
        body
      };
      var servAddr = "https://localhost:7100" + "/api/register" 
      fetch(servAddr, init)
      .then((response) => {
        if(response.ok === false) {
          snackbarHelper.showMessage(
            "Could not register the specified user."
          );
        } else {
          navigate("/login");
        }
      })
      .then((text) => {
        // text is the response body
      })
      .catch((e) => {
        snackbarHelper.showMessage(
          "Could not register the specified user."
        );
      });
    } else {
      //
    }
  }

  

  //userName:"",displayName:"", password:"", passwordValidator:""});

  return (
    <div className="row pt-2 fixeddivBigger">
      <button
        onClick={validate}
        type="button"
        id="Register"
        className="btn btn-primary mb-3"
      >
        Register
      </button>
      <div className="constantFontSize p-3 col fixeddiv" id="messageRegistered">
        {/*After clicking the registering successfully, go to the sign up page.*/}
        Already signed up? Click <Link to="/login">here</Link> to sign in.
      </div>
    </div>
  );
}




//Function to check whether a Username's length is valid or not.
function isUserNameValid(userName) {
  if (userName.length < 1) {
    snackbarHelper.showMessage(
      "Username must be at least 1 charcater! please try again."
    );
    return false;
  }
  return true;
}

//Function to check whether a Displayname's length is valid or not.
function isDisplayNameValid(displayName) {
  if (displayName.length < 1) {
    snackbarHelper.showMessage(
      "Displayname must be at least 1 charcater! please try again."
    );
    return false;
  }
  return true;
}

//Function to check whether the entered passwords are equal or not.
function isSamePassword(password1, password2) {
  if (!(password1 == password2)) {
    snackbarHelper.showMessage(
      "You entered different passwords! please try again."
    );
    return false;
  }
  return true;
}

//Function to check whether a password's length is valid or not.
function isPasswordValidLength(password) {
  if (password.length < 8) {
    snackbarHelper.showMessage(
      "Your password must be at least 8 characters! please try again."
    );
    return false;
  }
  if (password.length > 20) {
    snackbarHelper.showMessage(
      "Your password must be maximum 20 characters! please try again."
    );
    return false;
  }
  return true;
}

//Function to check whether a password is valid or not.
function isPasswordValid(password) {
  var numChecker = false;
  var letterChecker = false;
  for (let i = 0; i < password.length; i++) {
    if (password[i].toUpperCase() != password[i].toLowerCase()) {
      letterChecker = true;
    }
    if (password[i] >= "0" && password[i] <= "9") {
      numChecker = true;
    }
  }
  if (numChecker && letterChecker) {
    return true;
  }
  snackbarHelper.showMessage(
    "Your password must contain at least 1 number and 1 letter! please try again."
  );
  return false;
}

export default SignUpRegisterBox;
