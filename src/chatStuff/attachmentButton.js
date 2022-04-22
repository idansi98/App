import AttachAudio from "./attachAudio";
import AttachImage from "./attachImage";
import AttachVideo from "./attachVideo";

function AttachmentButton({isSmall, setMessageJustSent, setRecorder}) {
    return (
      <>
      <button className="btn btn-info dropdown-toggle" type="button" id="dropdownAttach" data-bs-toggle="dropdown" aria-expanded="false">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-paperclip" viewBox="0 0 16 16">
        <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z" />
      </svg>
    </button>

    <ul className="dropdown-menu transparentBG" aria-labelledby="dropdownAttach" id = "UL">
    <div id = "WRAP">
      <li>
        <AttachImage setMessageJustSent={setMessageJustSent}/>
        <AttachVideo setMessageJustSent={setMessageJustSent}/>
        <AttachAudio setMessageJustSent={setMessageJustSent} setRecorder={setRecorder} />
      </li>
      </div>
    </ul>
      </>
    )
}
export default AttachmentButton;