import { useNavigate } from "react-router-dom";
import defaultPFP from "../Media/defaultPFP.png";

//This class deals with the Chat object and its stuff.
class Chat {
  constructor(id, displayName, server, picture) {
    this.id = id;
    this.displayName = displayName
    this.server = server
    this.messages = [];
    this.picture = picture
  }
  addMessage(message) {
    this.messages.push(message);
  }
  get lastMessage() {
    if (this.messages.length != 0) {
      return this.messages[this.messages.length - 1];
    }
    return null;
  }

  //This function returns the  full contact's html.
  contactHTML({ setCurrentChat }) {
    var userNameForClick = this.id;

    //If not empty.
    if (this.lastMessage !== null) {
      var dateThen = this.lastMessage.dateTime;
      var dateNow = new Date().getTime();
      var timeIndicator = "";
      var msPassedSince = dateNow - dateThen;
      var secondsPassedSince = parseInt(msPassedSince / 1000);
      var minsPassedSince = parseInt(secondsPassedSince / 60);
      var hoursPassedSince = parseInt(minsPassedSince / 60);
      var daysPassedSince = parseInt(hoursPassedSince / 24);
      secondsPassedSince = secondsPassedSince % 60;
      minsPassedSince = minsPassedSince % 60;
      hoursPassedSince = hoursPassedSince % 24;

      if (daysPassedSince > 0) {
        timeIndicator =
          daysPassedSince + " days, " + hoursPassedSince + " hours ago";
      } else if (hoursPassedSince > 0) {
        timeIndicator =
          hoursPassedSince + " hours, " + minsPassedSince + " mins ago";
      } else if (minsPassedSince > 0) {
        timeIndicator =
          minsPassedSince + " mins, " + secondsPassedSince + " secs ago";
      } else {
        timeIndicator = secondsPassedSince + " secs ago ";
      }

      var arrow;
      if (this.lastMessage.sender === global.currentUser) {
        arrow = (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
            />
          </svg>
        );
      } else {
        arrow = (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-left"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
            />
          </svg>
        );
      }

      return (
        <tr
          key={this.id}
          data-username={userNameForClick}
          onClick={function () {
            global.currentChat = global.currentUser.searchChat(userNameForClick);
            setCurrentChat(global.currentChat);
          }}
        >
          <td>
            <img
              src={defaultPFP}
              alt=""
              className="profile-image rounded-circle"
            />
            {" " + this.displayName}
            <br />
            {arrow}
            <small>{" " + this.lastMessage.shortForm}</small>
            <div>
              {" "}
              <small>{timeIndicator}</small>
            </div>
          </td>
        </tr>
      );
    } else {
      //If empty.
      return (
        <tr
          key={this.id}
          onClick={function () {
            global.currentChat = global.currentUser.searchChat(userNameForClick);
            setCurrentChat(global.currentChat);
          }}
        >
          <td>
            <img
              src={defaultPFP}
              alt=""
              className="profile-image rounded-circle"
            />
            {this.displayName} <br /> <br /> <br />
          </td>
        </tr>
      );
    }
  }
}
export default Chat;
