import './Sign.css';

function Sign() {
  return (
    <>
    {/*The green background.*/}
    <div className="p-3 mb-2 bg-success text-white" id="green" />
    {/*The gray window to login.*/}
    <span className="d-flex justify-content-center" id="grayform">
      {/*The 3 rows form to enter Email, password, loging in, and signing up*/}
      <form className="row g-3 w-75 border border-0 bg-light mt-5 mb-3 rounded">
        {/*The Email row.*/}
        <div className="mt-3 mb-3 row">
          <label htmlFor="Username" className="col-sm-2 col-form-label">
            Username:
          </label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="Username" />
          </div>
        </div>
        {/*The Password row.*/}
        <div className="mt-3 mb-3 row">
          <label htmlFor="InputPassword" className="col-sm-2 col-form-label">
            Password:
          </label>
          <div className="col-sm-10">
            <input type="password" className="form-control" id="Password" />
            <span id="passwordHelpInline" className="form-text">
              Must be 8-20 characters long, and contain at least 1 number and 1
              letter.
            </span>
          </div>
        </div>
        {/*The Password verification row.*/}
        <div className="mt-3 mb-3 row">
          <label htmlFor="InputPassword" className="col-sm-2 col-form-label">
            Password again:
          </label>
          <div className="col-sm-10">
            <input type="password" className="form-control" id="Verifypassword" />
          </div>
        </div>
        {/*The display name row.*/}
        <div className="mt-4 mb-4 row">
          <label htmlFor="Displayname" className="col-sm-2 col-form-label">
            Display name:
          </label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="Displayname" />
          </div>
        </div>
        <div className="mt-4 mb-4 row">
          <input
            type="file"
            className="form-control col-sm-2 col-form-label"
            id="Photo"
            aria-label="file example"
            required=""
          />
          <div className="invalid-feedback col-sm-10">
            Example invalid form file feedback
          </div>
        </div>
        {/*The Logining and Registering row.*/}
        <div className="row pt-2">
          <div className="col">
            <button type="submit" id="Register" className="btn btn-primary mb-3">
              Register
            </button>
          </div>
          <div className="p-3 col">
            {/*After clicking the registering successfully, go to the sign up page.*/}
            Not registered? Click <a href="Signing.html">here</a> to register.
          </div>
        </div>
      </form>
    </span>
  </>
  );
}

export default Sign;