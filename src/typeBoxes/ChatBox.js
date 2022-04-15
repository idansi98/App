import chatHandler from '../functions/chatFunctions';


function ChatBox ({currentChat}) {
  var allMessagesJSX =[];
  console.log(currentChat)
  if (currentChat != null) {
    var messages = currentChat.messages;
    console.log(messages)
    for (var index in messages) {
      allMessagesJSX.push(messages[index].html);
      console.log(allMessagesJSX)
    }
  }
    return (
        <div className="message-table-scroll">
                    <table className="table">
                      <tbody>
                      {allMessagesJSX}
                      </tbody>
                    </table>
                  </div>
    ) ;

}

export default ChatBox;