import chatHandler from "./chatFunctions";

function SendButton({isSmall, inputText, setMessageJustSent}) {

    const buttonPressed = function () {
      var reciever = global.currentChat.user
      chatHandler.sendTextMessage(global.currentUser, reciever, inputText)
      var lastMessageID = global.currentUser.searchChat(reciever).lastMessage.ID
      setMessageJustSent(lastMessageID)
    }
    var padding;
    if (isSmall==true) {
        padding =<div>ㅤ</div>
    }
    return (
                <div className="col-sm-2 mt-1" >
                {padding}
                  <button onClick={buttonPressed} type="button" className="btn btn-info" id = "Send">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={22}
                      height={16}
                      fill="currentColor"
                      className="bi bi-send"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                    </svg></button>
                </div>
    )
}
export default SendButton;