import './Button.css'
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

function LoginRegisterBox({credentials}) {

    /*
    const userList = users.map((user, key) => {
        return <div key={key}> {user.username}:{user.password}  </div>;
    });*/
    const navigate = useNavigate();

    // updates global.currentUser
    const tryLogin = function() {
        var user = global.userDB.login(credentials.userName, credentials.password);
        if (user === false) {
            alert("Try again!");
        } else {
            console.log("Logged in!");
            global.token = 1;
            global.currentUser = user;
            navigate('/chats');
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

export default LoginRegisterBox;