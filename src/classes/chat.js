class Chat {
  constructor(user) {
    this.user = user;
    this.messages = [];
  }
  addMessage(message) {
    this.messages.push(message);
  }
  get lastMessage() {
    return this.messages[this.messages.length - 1];
  }

  //The ID of each element is it's position in the array. 
  get contactHTML() {
    var dateThen = this.lastMessage.dateTime
    var dateNow = new Date().getTime();
    var timeIndicator = "";
    var msPassedSince = dateNow-dateThen;
    var secondsPassedSince =parseInt(msPassedSince/1000);
    var minsPassedSince =parseInt(secondsPassedSince/60) ;
    var hoursPassedSince =parseInt(minsPassedSince/60) ;
    var daysPassedSince =parseInt(hoursPassedSince/24) ;
    secondsPassedSince = secondsPassedSince%60;
    minsPassedSince = minsPassedSince%60;
    hoursPassedSince = hoursPassedSince%24;
    
    
    if (daysPassedSince > 0) {
      timeIndicator = daysPassedSince + " days, " +hoursPassedSince + " hours ago"
    } else if (hoursPassedSince > 0) {
      timeIndicator = hoursPassedSince + " hours, "  + minsPassedSince + " mins ago"
    } else if (minsPassedSince >0 ) {
      timeIndicator = minsPassedSince + " mins, " +secondsPassedSince + " secs ago"
    } else {
      timeIndicator = secondsPassedSince + " secs ago ";
    }

    return ( 
      <tr>
        <img src={this.user.picture} alt="" className="profile-image rounded-circle" />
        {this.user.displayName} <br /> <small>{this.lastMessage.shortForm}</small>
       <div> <small>{timeIndicator}</small></div>
      </tr>);
  }
  // gets the full HTML of all the convo
  get convoHTML() {
    return;
  }
}
export default Chat;


