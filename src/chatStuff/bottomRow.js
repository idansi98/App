import AttachmentButton from "./attachmentButton";
import InputMessageBox from "../typeBoxes/inputMessageBox";
import SendButton from "./sendButton";
function BottomRow({isSmall}) {
    return (
        <div className="row message-box p-3" id = "Lower">
        <AttachmentButton isSmall={isSmall} />
        <InputMessageBox />
        <SendButton isSmall={isSmall}/>
      </div>
    )
}
export default BottomRow;