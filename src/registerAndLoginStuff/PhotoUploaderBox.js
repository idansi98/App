import { useRef } from "react";

//This component returns the photoBox.
function PhotoBox({ setCredentials, credentials }) {
  //We use stream to read the file.
  const givenPhotoBox = useRef(null);
  var file = null;
  const reader = new FileReader();

  const updatePhotoUploader = function () {
    file = givenPhotoBox.current.files[0];
    if (file) {
      reader.readAsDataURL(file);
    }
    reader.onload = function () {
      setCredentials((prev) => ({
        userName: prev.userName,
        displayName: prev.displayName,
        password: prev.password,
        passwordValidator: prev.passwordValidator,
        photo: reader.result,
      }));
    };
    reader.onerror = function () {
      //console.log(reader.error);
    };
  };

  /*
<div className="file btn btn-lg btn-light Check dropDownButton">
        accept = "image/*" 
        className = "Type dropDownButton" 
        title="Click here to upload an image"/>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={18}
            height={28}
            fill="currentColor"
            className="bi bi-camera dropDownSVG"
            viewBox="0 0 16 16" >
            <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z" />
            <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
          </svg>
          </div>
*/

  return (
    <div className="mt-1 mb-1 row fixeddiv">
      <label
        htmlFor="formFile"
        className="constantFontSize lengthierLables col-sm-2 col-form-label fixedlabel"
      >
        Click to change picture
      </label>

      <input
        ref={givenPhotoBox}
        onInput={updatePhotoUploader}
        type="file"
        className="Type"
        id="Photo"
        aria-label="file example"
        required=""
        accept="image/*"
      />
      <img
        src={credentials.photo}
        id="currentPicture"
        onClick={function () {
          document.getElementById("Photo").click();
        }}
      />
    </div>
  );
}

export default PhotoBox;
