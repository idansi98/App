import AttachmentButton from "./attachmentButton";
import InputMessageBox from "./inputMessageBox";
import SendButton from "./sendButton";
import { useState } from "react";





function BottomRow({isSmall, setMessageJustSent, messageJustSent, currentChat}) {
  const [inputText, setInputText] = useState("");
  const [recorder, setRecorder] = useState(null);
  



  if (currentChat == null) {
    return  (
      <div></div>
    )
  }
    return (
        <div className="row message-box p-3" id = "Lower">
        <AttachmentButton isSmall={isSmall} setMessageJustSent={setMessageJustSent} setRecorder={setRecorder}/>
        <InputMessageBox setInputText={setInputText}  messageJustSent={messageJustSent}/>
        <SendButton isSmall={isSmall} inputText={inputText} setMessageJustSent={setMessageJustSent} setInputText={setInputText} setRecorder={setRecorder} recorder={recorder}/>
      </div>
    )
}
export default BottomRow;