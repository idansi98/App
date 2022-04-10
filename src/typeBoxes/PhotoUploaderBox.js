import {useRef} from 'react';

function PhotoBox({setCredentials}) {
    const givenPhotoBox = useRef(null);

    const updatePhotoUploader = function() {
        setCredentials((prev) => ({
            userName: prev.userName,
            displayName: prev.displayName,
            password: prev.password,
            passwordValidator: prev.passwordValidator,
            photo: givenPhotoBox.current.value,
        }));
    };

    return (
        <div className="mt-1 mb-1 row">
        <label htmlFor="formFile" className="form-label">Choose a profile picture:</label>
        <input ref={givenPhotoBox} onInput={updatePhotoUploader}
         type="file" className="form-control col-sm-2 col-form-label" id="Photo" aria-label="file example" required=""  />
        <div className="invalid-feedback col-sm-10"> Example invalid form file feedback
        </div>
      </div>
    );
}

export default PhotoBox;