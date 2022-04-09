function LoginRegisterBox() {

    const tryLogin = function() {
        console.log("tried to login");
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