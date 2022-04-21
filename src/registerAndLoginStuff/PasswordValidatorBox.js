import {useRef} from 'react';

function PasswordValidatorBox({setCredentials}) {
    const givenPasswordValidatorBox = useRef(null);

    const updatePassWordValidator = function() {
        setCredentials((prev) => ({
            userName: prev.userName,
            displayName: prev.displayName,
            password: prev.password,
            passwordValidator: givenPasswordValidatorBox.current.value,
            photo: prev.photo
        }));
    };

    return (
        <div className="mt-3 mb-3 row fixeddiv formRowFixed">
        <label htmlFor="Displayname" className="constantFontSize lengthierLables col-sm-2 col-form-label fixedlabel">
          Repeat password
        </label>
        <div className="col-sm-10">
          <input ref={givenPasswordValidatorBox} onKeyUp={updatePassWordValidator}
          type="password" className="form-control shorterForm" id="Displayname" />
        </div>
      </div>
      
    );
}

export default PasswordValidatorBox;