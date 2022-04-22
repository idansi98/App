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
    //          <input ref={givenPasswordValidatorBox} onKeyUp={updatePassWordValidator}


    return (
        <div className="mt-1 mb-1 row fixeddiv formRowFixed">
        <label className="constantFontSize lengthierLables col-sm-2 col-form-label fixedlabel">
          Repeat password
        </label>
        <div className="col-sm-10 fixeddiv">
          <input ref={givenPasswordValidatorBox} onKeyUp={updatePassWordValidator}
          type="password" className="form-control shorterForm" id="passwordAgain" />
        </div>
      </div>
      
    );
}

export default PasswordValidatorBox;