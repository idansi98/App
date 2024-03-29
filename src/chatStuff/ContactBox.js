import { useState, useEffect } from "react";

//This component returns the Contactbox.
function ContactBox({ setCurrentChat, isSmall, searchedDN }) {
  var chats = global.currentUser.chats;
  var contactsHTML = [];
  //We update the time on contactBox using the useState hook.

  const [time, setTime] = useState(Date.now());
  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const calcContactsHTML = function (contactsHTML, chats) {
    //We sort the chats by the last message's send time.
    chats.sort((a, b) => {
      if (a.lastMessage === null && b.lastMessage === null) {
        return 0;
      }
      if (b.lastMessage === null) {
        return -1;
      }
      if (a.lastMessage === null) {
        return 1;
      }
      if (a.lastMessage.dateTime > b.lastMessage.dateTime) {
        return -1;
      }
      if (a.lastMessage.dateTime < b.lastMessage.dateTime) {
        return 1;
      }
      return 0;
    });
    for (var index in chats) {
      var chat = chats[index];
      if (
        chat.user.displayName
          .toLowerCase()
          .includes(searchedDN.toLowerCase()) ||
        chat.user.userName.toLowerCase().includes(searchedDN.toLowerCase())
      ) {
        //We use the contactHTML method from the chat class, to add the current chat to the array.
        contactsHTML.push(chat.contactHTML({ setCurrentChat }));
      }
    }
  };
  calcContactsHTML(contactsHTML, chats);

  //Here also when take under account our window width.
  if (isSmall != true) {
    return (
      <div className="col-sm-4 contacts">
        <div className="contact-table-scroll">
          <table className="table table-hover">
            <tbody>{contactsHTML}</tbody>
          </table>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
export default ContactBox;
