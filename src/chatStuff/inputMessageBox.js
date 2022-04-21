import { useRef } from "react";


function InputMessageBox ({setInputText, messageJustSent}) {

  const givenText = useRef(null);



  var sendButton = document.getElementById("Send")
  const textChanged = function(event) {
    if (event.key === 'Enter') {
      if (givenText.current.value !== "" && sendButton !== null) {
        sendButton.click();
        setInputText("")
      }
    } else {
      setInputText(givenText.current.value)
    }
  }
  return (
    <div className="col-sm-8 EditedDiv">
            <input onKeyUp={textChanged}
            ref = {givenText}
            type="text"
            className="form-control"
            placeholder="Write message..."
            id = "inputMessageBox"
            />
            </div>
  )
}




export default InputMessageBox;