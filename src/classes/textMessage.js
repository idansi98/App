import MessageTime from "../chatStuff/messageTime";
import messageStyler from "./messageStyler";

//This class deals with the Text message object and its stuff.
class TextMessage {
  constructor(text, sender) {
    this.text = text;
    this.sender = sender;
    this.dateTime = new Date().getTime();
    global.lastMessageID += 1;
    this.ID = global.lastMessageID;
  }

  get html() {
    var style = messageStyler.getMessageStyleByUser(this.sender);
    return (
      <tr id={this.ID} key={this.ID} className="noBorder">
        <td>
          <p className={style} id="Text">
            {this.text}
          </p>
        </td>
        <MessageTime dateTime={this.dateTime} />
      </tr>
    );
  }

  //TODO: make it so text isn't longer than 3-4 words
  get shortForm() {
    var maxTextLength = 20;
    if (this.text.length > maxTextLength) {
      return this.text.substr(0, maxTextLength - 3) + "...";
    }
    return this.text;
  }
}

export default TextMessage;
