import messageStyler from "../classes/messageStyler";
function MessageTime ({dateTime}) {
    var time =  new Date(dateTime);
    var correctFormat = messageStyler.formatAMPM(time)
    return (
        <td className="messageTime">
        <p className="p-1 mt-2 mr-3 shadow-sm messageTime">
          <small>{correctFormat}</small>
        </p>
      </td>
    )
}
export default MessageTime