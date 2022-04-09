import {useRef} from 'react';

function PasswordValidatorBox({setCredentials}) {
    const givenPasswordValidatorBox = useRef(null);

    const updatePassWordValidator = function() {
        setCredentials((prev) => ({
            userName: prev.userName,
            displayName: prev.displayName,
            password: prev.password,
            passwordValidator: givenPasswordValidatorBox.current.value,
        }));
    };

    return (
        <div className="mt-3 mb-3 row">
        <label htmlFor="Displayname" className="col-sm-2 col-form-label">
          Password again:
        </label>
        <div className="col-sm-10">
          <input ref={givenPasswordValidatorBox} onKeyUp={updatePassWordValidator} type="password" className="form-control" id="Displayname" />
        </div>
      </div>
      
    );
}

export default PasswordValidatorBox;