import messageStyler from "./messageStyler";
import MessageTime from "../chatStuff/messageTime";


class VideoMessage {
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
          <tr id = {this.ID} key={this.ID}>
          <td>
            <p className={style}>
              <video max-width="400" height="100%" controls>
                  <source src = {this.filePath}/>
              </video>
            </p>
          </td>
          <MessageTime dateTime={this.dateTime} />
        </tr>
      )
    }
    get shortForm() {
        return ("Video");
    }
}

export default VideoMessage;
