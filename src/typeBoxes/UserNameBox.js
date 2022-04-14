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
        <div className="mt-1 mb-1 row">
          <label htmlFor="Username" className="col-sm-2 col-form-label">
            Username:
          </label>
          <div className="col-sm-10">
            <input ref={givenUserNameBox} onKeyUp={updateUser} type="text" className="form-control" id="Username" />
            <span id="passwordHelpInline" className="form-text">
            Must be at least 1 character long.
        </span>
          </div>
        </div>
    );
}

export default UserNameBox;