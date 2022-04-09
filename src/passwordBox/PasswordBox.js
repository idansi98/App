function PasswordBox() {
    return (
        <div className="mt-3 mb-3 row">
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
            Password:
          </label>
          <div className="col-sm-10">
            <input type="password" className="form-control" id="Password" />
          </div>
        </div>
    );
}

export default PasswordBox;