import { useRef } from "react";

//This component returns the PasswordValidatorBox.
function PasswordValidatorBox({ setCredentials }) {
  const givenPasswordValidatorBox = useRef(null);

  const updatePassWordValidator = function () {
    setCredentials((prev) => ({
      userName: prev.userName,
      displayName: prev.displayName,
      password: prev.password,
      passwordValidator: givenPasswordValidatorBox.current.value,
      photo: prev.photo,
    }));
  };


  return (
    <div className="mt-1 mb-1 row fixeddiv formRowFixed">
      <label className="constantFontSize lengthierLables col-sm-2 col-form-label fixedlabel">
        Repeat password
      </label>
      <input
        ref={givenPasswordValidatorBox}
        onKeyUp={updatePassWordValidator}
        type="password"
        className="form-control shorterForm"
        id="passwordAgain"
      />
    </div>
  );
}

export default PasswordValidatorBox;