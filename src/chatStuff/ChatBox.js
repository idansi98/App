import { useEffect } from "react";

//This component returns the chatbox and all the messages in it.
function ChatBox({ currentChat }) {
  //We use the useEffect hook here so after the updated html is set, we scroll the page down. 
  useEffect(() => {
    var elem = document.getElementById("chatBox");
    elem.scrollTop = elem.scrollHeight;
  });

  var allMessagesJSX = [];
  if (currentChat != null) {
    var messages = currentChat.messages;
    for (var index in messages) {
      allMessagesJSX.push(messages[index].html);
    }
  }

  return (
    <div id="chatBox" className="message-table-scroll">
      <table className="table">
        <tbody>{allMessagesJSX}</tbody>
      </table>
    </div>
  );
}

export default ChatBox;
