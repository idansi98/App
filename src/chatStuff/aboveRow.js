import AboveChatRow from "./aboveChatRow"
import AboveContactsRow from "./aboveContactsRow"

function AboveRow({isSmall}) {
    if (isSmall==false) {
        return (
            <div className="row chat-top" id = "Upper">
            <AboveContactsRow />
            <AboveChatRow/>
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