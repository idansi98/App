import {useRef} from 'react';

function UserNameBox({setUserName}) {
    const givenUserNameBox = useRef(null);

    const updateUserName = function() {
        setUserName(givenUserNameBox.current.value)
    }
    return (
        <div className="mt-3 mb-3 row">
          <label htmlFor="Username" className="col-sm-2 col-form-label">
            Username:
          </label>
          <div className="col-sm-10">
            <input ref={givenUserNameBox} onKeyUp={updateUserName} type="text" className="form-control" id="Username" />
          </div>
        </div>
    );
}

export default UserNameBox;