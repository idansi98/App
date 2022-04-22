import {useRef} from 'react';

function PasswordBox({setCredentials}) {
    const givenPasswordBox = useRef(null);

    const updatePassword = function() {
        setCredentials((prev) => ({
            userName: prev.userName,
            displayName: prev.displayName,
            password: givenPasswordBox.current.value,
            passwordValidator: prev.passwordValidator,
            photo: prev.photo
        }));
    };

    return (
        <div className="mt-1 mb-1 row fixeddiv formRowFixed">
          <label className="constantFontSize lengthierLables col-sm-2 col-form-label fixedlabel">
            Password
          </label>
          <div className="col-sm-10 fixeddiv">
            <input ref={givenPasswordBox} onKeyUp={updatePassword} type="password" className="form-control shorterForm" id="Password" name="password" autoComplete="on"/>
          </div>
        </div>
    );
}

export default PasswordBox;