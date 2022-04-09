import {useRef} from 'react';

function UserNameBox({setCredentials}) {
    const givenUserNameBox = useRef(null);

    const updateUser = function() {
        setCredentials((prev) => ({
            userName:givenUserNameBox.current.value,
            password:prev.password
        }));
    }
    return (
        <div className="mt-3 mb-3 row">
          <label htmlFor="Username" className="col-sm-2 col-form-label">
            Username:
          </label>
          <div className="col-sm-10">
            <input ref={givenUserNameBox} onKeyUp={updateUser} type="text" className="form-control" id="Username" />
          </div>
        </div>
    );
}

export default UserNameBox;