//import chatHandler from "./chatFunctions";
import { useRef } from "react";
function DisplayNameInputBox({ setSearchedDN }) {
    const displayText = useRef(null);
    const textUpdated = function () {
        setSearchedDN(displayText.current.value)
    }


    return (
        <input type="text" ref={displayText} onKeyUp={textUpdated} className="form-control" placeholder=""
        aria-label="Username" aria-describedby="basic-addon1" id="DisplayNameInput" />
    )
}
export default DisplayNameInputBox;