import AboveChatRow from "./aboveChatRow";
import AboveContactsRow from "./aboveContactsRow";

//This component returns the the above row of the chat in general(the contacts list and the chat screen).
function AboveRow({ isSmall, setCurrentChat, currentChat, setSearchedDN }) {
  return (
    <div className="row chat-top" id="Upper">
      <AboveContactsRow
        setCurrentChat={setCurrentChat}
        isSmall={isSmall}
        setSearchedDN={setSearchedDN}
      />
      <AboveChatRow currentChat={currentChat} />
    </div>
  );
}
export default AboveRow;
