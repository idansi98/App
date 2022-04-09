import {Link} from 'react-router-dom'

function LoginRegisterBox({credentials}) {
    
    const tryLogin = function() {
        var foundUser = false;
        for (var index in users) {
            if (users[index].username == credentials.userName) {
                foundUser = true;
                if (users[index].password == credentials.password) {
                    console.log("Logged in!");
                } else {
                    console.log("Bad password!");
                    break;
                }
            }
        }
        if (!foundUser) {
            console.log("Didn't find the user!");
        }
    }

    return (
        <div className="row pt-2">
          <div className="col">
            <button onClick={tryLogin} type="button" id="Login" className="btn btn-primary mb-3">
              Login
            </button>
          </div>
          <div className="p-3 col">
            {/*After clicking the registering successfully, go to the sign up page.*/}
            Not registered? Click <Link to='/signup'>here</Link> to register.
          </div>
        </div>
    );
}

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
    if(fileType == "JPEG" || fileType == "JPG" || fileType == "PNG") {
        return true;
    }
    alert("You have just inserted a file which is not an image! please try again.");
    return false;
    }

export default LoginRegisterBox;