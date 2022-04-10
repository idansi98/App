import {useRef} from 'react';

function DisplayNameBox({setCredentials}) {
    const givenDisplayNameBox = useRef(null);

    const updateDisplayName = function() {
        setCredentials((prev) => ({
            userName: prev.userName,
            displayName: givenDisplayNameBox.current.value,
            password: prev.password,
            passwordValidator: prev.passwordValidator,
            photo: prev.photo
        }));
    };

    return (
        <div className="mt-3 mb-3 row">
        <label htmlFor="Displayname" className="col-sm-2 col-form-label">
          Display name:
        </label>
        <div className="col-sm-10">
          <input ref={givenDisplayNameBox} onKeyUp={updateDisplayName} type="text" className="form-control" id="Displayname" />
        </div>
      </div>
      
    );
}

export default DisplayNameBox;