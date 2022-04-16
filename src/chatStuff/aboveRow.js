import AboveChatRow from "./aboveChatRow"
import AboveContactsRow from "./aboveContactsRow"

function AboveRow({isSmall,setCurrentChat, currentChat}) {
  return (
    <div className="row chat-top" id = "Upper">
    <AboveContactsRow setCurrentChat={setCurrentChat} isSmall={isSmall}/>
    <AboveChatRow currentChat={currentChat}/>
  </div> 
)

}
export default AboveRow