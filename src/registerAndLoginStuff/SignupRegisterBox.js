import './Button.css'
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom';
import chatHandler from '../chatStuff/chatFunctions';

function SignUpRegisterBox({credentials}) {

    const navigate = useNavigate();

function validate() {
    if (isSamePassword(credentials.password, credentials.passwordValidator) &&
        isPasswordValidLength(credentials.password) && isUserNameValid(credentials.userName)
        && isDisplayNameValid(credentials.displayName) && isPasswordValid(credentials.password)
        && !doesUserExist(credentials.userName)) {
            chatHandler.addUser(credentials.userName,credentials.displayName,credentials.photo,credentials.password);
            global.currentUser = chatHandler.findUser(credentials.userName);
            tempAddExampleChats()
            navigate('/chats');
        } else {
            var audio = new Audio('donkey.ogg');
            audio.play();
        }
}

function tempAddExampleChats() {
    var currentUser = global.currentUser;
    var idan = chatHandler.findUser("Idan");
    var ido = chatHandler.findUser("Ido");
    var alice = chatHandler.findUser("Alice")
    var bob = chatHandler.findUser("1")
    var leo = chatHandler.findUser("2");
    var james = chatHandler.findUser("3");
    var hemi = chatHandler.findUser("4");

    chatHandler.sendTextMessage(currentUser,ido,"hi");
    chatHandler.sendTextMessage(ido,currentUser,"how are you?");
    chatHandler.sendImageMessage(currentUser, ido,"suspicious.png")
    chatHandler.sendTextMessage(ido,currentUser,"Stop sending me propoganda please :C");
    chatHandler.sendImageMessage(currentUser, ido,"suspicious.png")
    chatHandler.sendTextMessage(ido,currentUser,"Hmmm");

    chatHandler.sendTextMessage(idan,currentUser,"Did you watch the last batman movie?");
    chatHandler.sendTextMessage(currentUser,idan,"I sure didn't!")
    chatHandler.sendAudioMessage(idan, currentUser, "sound.mp3");
    chatHandler.sendTextMessage(currentUser,idan,"Nice trt")
    chatHandler.sendTextMessage(currentUser,idan,"Nice try*")

    chatHandler.sendTextMessage(currentUser,alice,"Hi...");
    chatHandler.sendTextMessage(currentUser,alice,"Whats up alice?");
    chatHandler.sendTextMessage(currentUser,alice,"ALICE IS EVERYTHING OKAY?");
    chatHandler.sendTextMessage(currentUser,alice,"ALICE ANSWER ME");
    chatHandler.sendTextMessage(currentUser,alice,"THATS IT");
    chatHandler.sendVideoMessage(currentUser, alice,"earth.mp4")
    chatHandler.sendTextMessage(alice,currentUser,"Please delete my number...");


    chatHandler.sendTextMessage(bob,currentUser,"YO I AM BOB HELLO LONG MESSSAGEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE")
    chatHandler.sendImageMessage(currentUser, bob,"suspicious.png")
    chatHandler.sendTextMessage(bob,currentUser,"YO I AM BOB HELLO LONG MESSSAGEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE")
    chatHandler.sendAudioMessage(bob, currentUser, "sound.mp3");
    chatHandler.sendTextMessage(bob,currentUser,"YO I AM BOB HELLO LONG MESSSAGEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE")
    chatHandler.sendVideoMessage(currentUser, bob,"earth.mp4")
    chatHandler.sendTextMessage(bob,currentUser,"YO I AM BOB HELLO LONG MESSSAGEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE")

    chatHandler.sendTextMessage(leo,currentUser,"Good video!")
    chatHandler.sendTextMessage(currentUser,leo,"?")

    chatHandler.sendTextMessage(james,currentUser,"I am James!")
    chatHandler.sendTextMessage(currentUser,james,"I am James!")
    chatHandler.sendTextMessage(james,currentUser,"I am James!")
    chatHandler.sendTextMessage(currentUser,james,"I am James!")
    chatHandler.sendTextMessage(james,currentUser,"I am James!")
    chatHandler.sendTextMessage(currentUser,james,"I am James!")
    chatHandler.sendTextMessage(james,currentUser,"I am James!")
    chatHandler.sendTextMessage(currentUser,james,"I am James!")
    chatHandler.sendTextMessage(james,currentUser,"I am James!")
    chatHandler.sendTextMessage(currentUser,james,"I am James!")
    chatHandler.sendTextMessage(james,currentUser,"I am James!")
    chatHandler.sendTextMessage(currentUser,james,"I am James!")
    
    chatHandler.sendTextMessage(hemi,currentUser,"I am going to make the next homework more interesting!")

}

//userName:"",displayName:"", password:"", passwordValidator:""});

    return (
        <div className="row pt-2 fixeddiv">
          <div className="col fixeddiv">
            <button onClick={validate} type="button" id="Login" className="btn btn-primary mb-3">
              Sign up
            </button>
          </div>
          <div className="p-3 col">
            {/*After clicking the registering successfully, go to the sign up page.*/}
            Already signed up? Click <Link to='/login'>here</Link> to sign in.
          </div>
        </div>
    );
}

function doesUserExist(userName) {
    var trollName = userName + "_" + randomLetters();
    if (chatHandler.findUser(userName)===null) {
        return false;
    }
    alert("Username already exists, please try " + trollName +" instead.");
    return true;
}

function randomLetters() {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < 20; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
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


export default SignUpRegisterBox;