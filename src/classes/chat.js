class Chat {
    constructor(name, picture) {
        this.name = name;
        this.picture = picture;
        this.messages = [];
    }
    addMessage(chat) {
        this.messages.push(chat);
    }
    get lastMessage() {
        return this.messages[this.messages.length -1];
    }
    // the ID of each element is the position in the array 
    get contactHTML() {
        return (
            <tr>
            <td>
              <img 
                src={this.picture}
                alt=""
                className="profile-image rounded-circle"
              />
            </td>
            <td>
              {this.name} 
            </td>
            <td>
              <small>{this.lastMessage.shortForm}</small>
            </td>
          </tr>);
    }
    // gets the full HTML of all the convo
    get convoHTML() {
        return;
    }
}
export default Chat;


