<<<<<<< HEAD
function ChatBox (r) {
=======
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
>>>>>>> 6cf328c4c240da48311044aa7a8f3088faa8b954
    return (
        <div className="message-table-scroll">
                    <table className="table">
                      <tbody>
<<<<<<< HEAD
                        
                        {/* end */}
=======
                      {allMessagesJSX}
>>>>>>> 6cf328c4c240da48311044aa7a8f3088faa8b954
                      </tbody>
                    </table>
                  </div>
    ) ;

}

export default ChatBox;