import "./Button.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import snackbarHelper from "../classes/snackbarHelper";
import $ from 'jquery';
import CurrentUserHandler from "../classes/currentUserHandler";

//This component returns the LoginRegisterBox.
function LoginRegisterBox({ credentials }) {
  /* **For testing purposes**
    const userList = users.map((user, key) => {
        return <div key={key}> {user.username}:{user.password}  </div>;
    });*/

  //We use the useNavigate hook to go to other html file.
  const navigate = useNavigate();

   const tryLogin = async function () {
    const headers = new Headers();
    headers.append('content-type', 'application/json');
    
    const body = `{"username":"${credentials.userName}","password":"${credentials.password}"}`;
    
    const init = {
      method: 'POST',
      headers,
      body
    };
    
    fetch('http://localhost:25565/api/login', init)
    .then( async (response) => { //important to put the async here!!!
      if (response.ok) {
        await CurrentUserHandler.init()
        global.currentAddress = response.body;
        navigate("/chats");
      } else {
        snackbarHelper.showMessage("Incorrect username or password");

      }
    }) 
    .then((text) => {
      // text is the response body
    })
    .catch((e) => {
      snackbarHelper.showMessage("Incorrect username or password");
    });
  }

  //Updates global.currentUser.

  return (
    <div className="row fixeddivBigger pt-2">
      <button
        onClick={tryLogin}
        type="button"
        id="Login"
        className="btn btn-primary mb-3"
      >
        Login
      </button>
      <div
        className="constantFontSize p-3 col fixeddiv"
        id="messageNotRegistered"
      >
        {/*After clicking the registering successfully, go to the sign up page.*/}
        Not registered? Click <Link to="/signup">here</Link> to register.
      </div>
    </div>
  );
}

export default LoginRegisterBox;
