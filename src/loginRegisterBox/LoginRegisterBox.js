import users from "../users/users";

function LoginRegisterBox({credentials}) {
    // can be put to see all users
    const userList = users.map((user, key) => {
        return <div key={key}> {user.username}:{user.password}  </div>;
    });


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
            Not registered? Click <a href="Signing.html">here</a> to register.
          </div>
        </div>
    );
}

export default LoginRegisterBox;