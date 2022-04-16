import AboveChatRow from "./aboveChatRow"
import AboveContactsRow from "./aboveContactsRow"

function AboveRow({isSmall,setCurrentChat, currentChat, setSearchedUser}) {
    if (isSmall==false) {
        return (
            <div className="row chat-top" id = "Upper">
            <AboveContactsRow setCurrentChat={setCurrentChat} setSearchedUser={setSearchedUser}/>
            <AboveChatRow currentChat={currentChat}/>
          </div> 
        )
    } else {
        return (
            <div className="row chat-top" id = "Upper">
            <AboveChatRow />
          </div> 
        )
    }

}
export default AboveRow