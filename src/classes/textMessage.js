class TextMessage {
    constructor(text, sender) {
        this.text = text;
        this.sender = sender;
        this.dateTime = new Date().getTime();
    }
    get html() {
        var time =  new Date(this.dateTime);
        var stringTime = "12:50PM"
        
        if (this.sender === global.currentUser) {
            return (
                <tr>
                <td>
                  <p className="bg-primary p-2 mt-2 mr-5 shadow-sm text-white float-left rounded">
                    {this.text}
                  </p>
                </td>
                <td className="messageTime">
                  <p className="p-1 mt-2 mr-3 shadow-sm messageTime">
                    <small>{stringTime}</small>
                  </p>
                </td>
              </tr>
            )
        } else {
            return (
                <tr>
                <td>
                  <p className="bg-success p-2 mt-2 mr-5 shadow-sm text-white float-right rounded rightMessage">
                  {this.text}
                  </p>
                </td>
                <td className="messageTime">
                  <p className="p-1 mt-2 mr-3 shadow-sm messageTime">
                    <small>{stringTime}</small>
                  </p>
                </td>
              </tr>
            )
        }
    }
    //TODO: make it so text isnt longer than 3-4 words
    get shortForm() {
      var maxTextLength = 20;
      if (this.text.length > maxTextLength) {
        return this.text.substr(0,maxTextLength-3) + "..."
      }
        return (this.text);
    }
}

export default TextMessage;