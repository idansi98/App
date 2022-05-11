import { useState, useEffect } from "react";

//This component returns the Contactbox.
function ContactBox({ setCurrentChat, isSmall, searchedDN }) {
  var contactsHTML = [];
  //We update the time on contactBox using the useState hook.

  const [time, setTime] = useState(Date.now());
  const [contacts, setContacts] = useState("");
  useEffect(async () => {
    if(global.token != null) {
      const res = await fetch('https//localhost:7100/api/Contacts');
      const data = await res.json();
      setContacts(data);
      console.log(contacts);
    }

    const interval = setInterval(() => setTime(Date.now()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
/*
  const calcContactsHTML = function (contactsHTML) {
    //We sort the chats by the last message's send time.
    contacts.sort((a, b) => {
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
  calcContactsHTML(contactsHTML);
*/
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
