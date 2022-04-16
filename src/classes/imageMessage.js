import messageStyler from "./messageStyler";
import MessageTime from "../chatStuff/messageTime";


class ImageMessage {
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
              <img src = {this.filePath} object-fit = "cover" height = "400" max-width="100%"/>
            </p>
          </td>
          <MessageTime dateTime={this.dateTime} />
        </tr>
      )
    }
    get shortForm() {
        return ("Image");
    }
}

export default ImageMessage;