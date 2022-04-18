import { useRef } from "react";


function InputMessageBox ({setInputText, messageJustSent}) {

  const givenText = useRef(null);

  if (global.lastMessageSent != messageJustSent) {
    global.lastMessageSent = messageJustSent;
    if (givenText.current !== null) {
      givenText.current.value = ""
      setInputText("")
    }
  }

  var input = document.getElementById("inputMessageBox");
  var sendButton = document.getElementById("Send")
  const textChanged = function(event) {
    if (event.key === 'Enter') {
      if (givenText.current.value !== "" && sendButton !== null) {
        sendButton.click();

      }
    } else {
      setInputText(givenText.current.value)
    }
  }





  return (
         <div className="col-sm-8">
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