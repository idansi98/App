import { useRef } from "react";


function ChatBox ({currentChat, messageJustSent}) {



  var allMessagesJSX =[];

  if (currentChat != null) {
    var messages = currentChat.messages;
    for (var index in messages) {
      allMessagesJSX.push(messages[index].html);
    }
  }


    return (
        <div className="message-table-scroll">
            <table className="table">
              <tbody >
                {allMessagesJSX}
              </tbody>
            </table>
        </div>
    ) ;

}

export default ChatBox;