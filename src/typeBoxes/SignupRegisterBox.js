import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom';

function SignUpRegisterBox({credentials}) {

    const navigate = useNavigate();

function validate() {
    if (isSamePassword(credentials.password, credentials.passwordValidator) &&
        isPasswordValidLength(credentials.password) && isUserNameValid(credentials.userName)
        && isDisplayNameValid(credentials.displayName) && isPasswordValid(credentials.password)
        &&  isFileImage(credentials.photo)) {
            console.log("Logged in successfuly");
            alert("Signed up successfully!");
            navigate("/login");
        }
}

//userName:"",displayName:"", password:"", passwordValidator:""});

    return (
        <div className="row pt-2">
          <div className="col">
            <button onClick={validate} type="button" id="Login" className="btn btn-primary mb-3">
              Login
            </button>
          </div>
          <div className="p-3 col">
            {/*After clicking the registering successfully, go to the sign up page.*/}
            Already registered? Click <Link to='/login'>here</Link> to sign in.
          </div>
        </div>
    );
}

//Function to check whether a Username's length is valid or not.
function isUserNameValid(userName) {
    if(userName.length < 1) {
        alert("Username must be at least 1 charcater! please try again.");
        return false;
    }
    return true;
}

//Function to check whether a Displayname's length is valid or not.
function isDisplayNameValid(displayName) {
    if(displayName.length < 1) {
        alert("Displayname must be at least 1 charcater! please try again.");
        return false;
    }
    return true;
}

 //Function to check whether the entered passwords are equal or not.
function isSamePassword(password1, password2) {
    if(!(password1 == password2)) {
        alert("You entered different passwords! please try again.");
        return false;
    }
    return true;
}

 //Function to check whether a password's length is valid or not.
 function isPasswordValidLength(password) {
    if(password.length < 8) {
        alert("Your password must be at least 8 characters! please try again.");
        return false;     
    }
    if(password.length > 20) {
        alert("Your password must be maximum 20 characters! please try again.");
        return false;  
    }
    return true;
}

 //Function to check whether a password is valid or not.
 function isPasswordValid(password) {
    var numChecker = false;
    var letterChecker = false;
    for(let i = 0; i < password.length; i++) {
        if(password[i].toUpperCase() != password[i].toLowerCase()) {
            letterChecker = true;
        }
        if(password[i] >= '0' && password[i] <= '9') {
            numChecker = true;
        }
    }
    if(numChecker && letterChecker) {
        return true;
    }
    alert("Your password must contain at least 1 number and 1 letter! please try again.")
    return false;    
}

//Function to check whether a file is an image or not.
function isFileImage(file) {
    let index = file.lastIndexOf(".") + 1;
    let fileType = file.substring(index, file.length).toUpperCase();
    console.log("fileType");
    if(fileType == "JPEG" || fileType == "JPG" || fileType == "PNG") {
        return true;
    }
    alert("You have just inserted a file which is not an image! please try again.");
    return false;
    }

export default SignUpRegisterBox;