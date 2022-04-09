import users from "../users/users";
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import {useState} from 'react';

function LoginRegisterBox({credentials}) {
    // can be put to see all users
    const [token, setToken] = useState(0);

    const userList = users.map((user, key) => {
        return <div key={key}> {user.username}:{user.password}  </div>;
    });
    const navigate = useNavigate();


    const tryLogin = function() {
        var foundUser = false;
        for (var index in users) {
            if (users[index].username == credentials.userName) {
                foundUser = true;
                if (users[index].password == credentials.password) {
                    console.log("Logged in!");
                    global.token = 1;
                    setToken(1);
                    navigate('/chats');
                    break;
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

export default LoginRegisterBox;