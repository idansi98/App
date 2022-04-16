class AudioMessage {
    constructor(filePath, sender) {
        this.filePath = filePath;
        this.sender = sender;
        this.dateTime = new Date().getTime();
        global.lastMessageID +=1;
        this.ID = global.lastMessageID;
    }

    #formatAMPM(backThen) {
        var rightNow = new Date()
        var dateRN = rightNow.getDate();
        var monthRN = rightNow.getMonth();
        var yearRN = rightNow.getYear();
  
        var date = backThen.getDate()
        var month = backThen.getMonth()
        var year = backThen.getYear()
  
        if (date!==dateRN || month !== monthRN || year !== yearRN) {
          var strTime = date + "/" + month + "/" + year;
          return strTime;
        } else {
          var hours = backThen.getHours();
          var minutes = backThen.getMinutes();
          var ampm = hours >= 12 ? 'pm' : 'am';
          hours = hours % 12;
          hours = hours ? hours : 12; // the hour '0' should be '12'
          minutes = minutes < 10 ? '0'+minutes : minutes;
          var strTime = hours + ':' + minutes + ' ' + ampm;
          return strTime;
        }
      }
      
      get html() {
          var time =  new Date(this.dateTime);
          var correctFormat = this.#formatAMPM(time)
          
          if (this.sender === global.currentUser) {
              return (
                  <tr key={this.ID}>
                  <td>
                    <p className="bg-primary p-2 mt-2 mr-5 shadow-sm text-white float-left rounded">
                      <audio controls>
                      <source src={this.filePath}/>
                      </audio>
                    </p>
                  </td>
                  <td className="messageTime">
                    <p className="p-1 mt-2 mr-3 shadow-sm messageTime">
                      <small>{correctFormat}</small>
                    </p>
                  </td>
                </tr>
              )
          } else {
              return (
                  <tr key={this.ID}>
                  <td>
                    <p className="bg-success p-2 mt-2 mr-5 shadow-sm text-white float-right rounded rightMessage">
                    {this.text}
                    </p>
                  </td>
                  <td className="messageTime">
                    <p className="p-1 mt-2 mr-3 shadow-sm messageTime">
                      <small>{correctFormat}</small>
                    </p>
                  </td>
                </tr>
              )
          }
      }
    get shortForm() {
        return ("Audio");
    }
}

export default AudioMessage;