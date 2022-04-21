import {useRef} from 'react';

function UserNameBox({setCredentials}) {
    const givenUserNameBox = useRef(null);

    const updateUser = function() {
        setCredentials((prev) => ({
            userName: givenUserNameBox.current.value,
            displayName: prev.displayName,
            password: prev.password,
            passwordValidator: prev.passwordValidator,
            photo: prev.photo
        }));
    }
    return (
        <div className="mt-1 mb-1 row fixeddiv formRowFixed">
          <label htmlFor="Username" className="constantFontSize lengthierLables col-sm-2 col-form-label fixedlabel">
            Username
          </label>
          <div className="col-sm-10 fixeddiv">
            <input ref={givenUserNameBox} onKeyUp={updateUser} type="text" className="form-control shorterForm" id="Username" />
          </div>
        </div>
    );
}

export default UserNameBox;