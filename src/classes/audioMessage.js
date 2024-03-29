import messageStyler from "./messageStyler";
import MessageTime from "../chatStuff/messageTime";

//This class deals with Audio messages and their stuff.
class AudioMessage {
  constructor(filePath, sender) {
    this.filePath = filePath;
    this.sender = sender;
    this.dateTime = new Date().getTime();
    global.lastMessageID += 1;
    this.ID = global.lastMessageID;
  }

  get html() {
    var style = messageStyler.getMessageStyleByUser(this.sender);
    return (
      <tr id={this.ID} key={this.ID} className="text-wrap noBorder">
        <td className="text-wrap">
          <p className={style}>
            <audio controls className="">
              <source src={this.filePath} />
            </audio>
          </p>
        </td>
        <MessageTime dateTime={this.dateTime} />
      </tr>
    );
  }
  get shortForm() {
    return "Audio";
  }
}

export default AudioMessage;
