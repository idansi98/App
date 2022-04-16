import messageStyler from "./messageStyler";
import MessageTime from "../chatStuff/messageTime";

class AudioMessage {
    constructor(filePath, sender) {
        this.filePath = filePath;
        this.sender = sender;
        this.dateTime = new Date().getTime();
        global.lastMessageID +=1;
        this.ID = global.lastMessageID;
    }

      get html() {
          var style = messageStyler.getMessageStyleByUser(this.sender)
          return (
            <tr id = {this.ID} key={this.ID} class="text-wrap">
            <td class="text-wrap">
              <p className={style}>
                <audio controls>
                <source src={this.filePath}/>
                </audio>
              </p>
            </td>
            <MessageTime dateTime={this.dateTime} />
          </tr>
        )
      }
    get shortForm() {
        return ("Audio");
    }
}

export default AudioMessage;