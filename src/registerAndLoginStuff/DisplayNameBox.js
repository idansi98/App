import { useRef } from "react";

//This component returns the DisplayNamebox.
function DisplayNameBox({ setCredentials }) {
  const givenDisplayNameBox = useRef(null);

  const updateDisplayName = function () {
    setCredentials((prev) => ({
      userName: prev.userName,
      displayName: givenDisplayNameBox.current.value,
      password: prev.password,
      passwordValidator: prev.passwordValidator,
      photo: prev.photo,
    }));
  };

  return (
    <div className="mt-3 mb-3 row fixeddiv formRowFixed">
      <label
        htmlFor="Displayname"
        className="constantFontSize lengthierLables col-sm-2 col-form-label fixedlabel"
      >
        Display name
      </label>
      <input
        ref={givenDisplayNameBox}
        onKeyUp={updateDisplayName}
        type="text"
        className="form-control shorterForm"
        id="Displayname"
      />
    </div>
  );
}

export default DisplayNameBox;
