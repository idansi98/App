import "./Button.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import chatHandler from "../chatStuff/chatFunctions";
import snackbarHelper from "../classes/snackbarHelper";

//This component returns the LoginRegisterBox.
function LoginRegisterBox({ credentials }) {
  /* **For testing purposes**
    const userList = users.map((user, key) => {
        return <div key={key}> {user.username}:{user.password}  </div>;
    });*/

  //We use the useNavigate hook to go to other html file.
  const navigate = useNavigate();

  //Updates global.currentUser.
  const tryLogin = function () {
    var user = chatHandler.login(credentials.userName, credentials.password);
    if (user === null) {
      snackbarHelper.showMessage("Incorrect username or password");
    } else {
      global.currentUser = user;
      navigate("/chats");
    }
  };
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
