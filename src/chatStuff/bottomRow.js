import AttachmentButton from "./attachmentButton";
import InputMessageBox from "./inputMessageBox";
import SendButton from "./sendButton";
import { useState } from "react";

//This component returns the the bottom row of the chat in general(the contacts list and the chat screen).
function BottomRow({
  isSmall, setMessageJustSent, messageJustSent, currentChat,}) {
    //We use two times the usestate hook here.
  const [inputText, setInputText] = useState("");
  const [recorder, setRecorder] = useState(null);

  if (currentChat == null) {
    return <div></div>;
  }
  return (
    <div className="row message-box p-3" id="Lower">
      <AttachmentButton
        isSmall={isSmall}
        setMessageJustSent={setMessageJustSent}
        setRecorder={setRecorder}
      />
      <InputMessageBox
        setInputText={setInputText}
        messageJustSent={messageJustSent}
      />
      <SendButton
        isSmall={isSmall}
        inputText={inputText}
        setMessageJustSent={setMessageJustSent}
        setInputText={setInputText}
        setRecorder={setRecorder}
        recorder={recorder}
      />
    </div>
  );
}
export default BottomRow;
