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
  const textChanged = function() {
    setInputText(givenText.current.value)
  }
  
  return (
         <div className="col-sm-8">
            <input onKeyUp={textChanged}
            ref = {givenText}
            type="text"
            className="form-control"
            placeholder="Write message..."
            id = "Form"
            />
        </div>
  )
}
export default InputMessageBox;