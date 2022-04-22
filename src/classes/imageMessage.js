import messageStyler from "./messageStyler";
import MessageTime from "../chatStuff/messageTime";

class ImageMessage {
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
      <tr id={this.ID} key={this.ID} className="noBorder">
        <td>
          <p className={style}>
            <img
              src={this.filePath}
              className=""
              object-fit="cover"
              width="100%"
              max-height="100%"
              onClick={function () {
                // TODO: enlarge the image
              }}
            />
          </p>
        </td>
        <MessageTime dateTime={this.dateTime} />
      </tr>
    );
  }
  get shortForm() {
    return "Image";
  }
}

export default ImageMessage;
