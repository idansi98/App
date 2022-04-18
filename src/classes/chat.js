import chatHandler from '../chatStuff/chatFunctions';
import { useNavigate } from 'react-router-dom';
class Chat {
  constructor(user) {
    this.user = user;
    this.messages = [];
  }
  addMessage(message) {
    this.messages.push(message);
  }
  get lastMessage() {
    if (this.messages.length!=0) {
      return this.messages[this.messages.length - 1];
    }
    return null;
  }

  //The ID of each element is it's position in the array. 
  contactHTML({setCurrentChat}) {
    var userNameForClick = this.user.userName;
    if (this.lastMessage!==null) {
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

      var arrow;
      console.log(this.lastMessage.sender)
      if (this.lastMessage.sender === global.currentUser) {
        arrow = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
      </svg>
      } else {
        arrow =  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
      </svg>
      }
  
  
   
      return ( 
        <tr key= {this.user.userName}
            data-username = {userNameForClick}
        onClick={function () {
          var user = chatHandler.findUser(userNameForClick);
          var chat = global.currentUser.searchChat(user);
          global.currentChat = chat;
          setCurrentChat(chat);

        }}>
        <td>
        <img src={this.user.picture} alt="" className="profile-image rounded-circle" />
        {this.user.displayName} 
        <br /> 
        {arrow}<small>{this.lastMessage.shortForm}</small>
       <div> <small>{timeIndicator}</small></div>
         </td>
  
        </tr>);
    } else {
      return (
        <tr key= {this.user.userName}
        onClick={function () {
          var user = chatHandler.findUser(userNameForClick);
          var chat = global.currentUser.searchChat(user);
          global.currentChat = chat;
          setCurrentChat(chat);
        }}>
        <td>
        <img src={this.user.picture} alt="" className="profile-image rounded-circle" />
        {this.user.displayName} <br />  <br /> <br />
         </td>
        </tr>
      )
    }
    
  }

}
export default Chat;
