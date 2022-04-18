import { useRef } from "react";


function ChatBox ({currentChat, messageJustSent}) {

  /*
  const scrollDown = function () {
    var elem = document.getElementById('chatBox');
    elem.scrollTop = elem.scrollHeight;
  }*/

  var allMessagesJSX =[];

  if (currentChat != null) {
    var messages = currentChat.messages;
    for (var index in messages) {
      allMessagesJSX.push(messages[index].html);
    }
  }


    return (
        <div  id = "chatBox" className="message-table-scroll">
            <table className="table">
              <tbody >
                {allMessagesJSX}
              </tbody>
            </table>
        </div>
    ) ;

}

export default ChatBox;