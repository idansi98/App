function ContactBox ({setCurrentChat, isSmall, searchedDN}) {
    var chats = global.currentUser.chats
    var contactsHTML = [];

  const calcContactsHTML = function (contactsHTML, chats) {

    // sorts according to last message send time
    chats.sort((a,b) =>  {
      if (a.lastMessage === null && b.lastMessage===null) {
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
    })
    for (var index in chats) {
      var chat = chats[index]
      if (chat.user.displayName.includes(searchedDN)) {
        contactsHTML.push(chat.contactHTML({setCurrentChat}));
      }
    }
  }
    calcContactsHTML(contactsHTML,chats)

    if (isSmall != true) {
      return (
        <div className="col-sm-4 contacts">
                  <div className="contact-table-scroll">
                    <table className="table table-hover">
                      <tbody>
                      {contactsHTML}
                      </tbody>
                    </table>
                    </div>
                  </div>
    );
    } else {
      return (<></>)
    }

}
export default ContactBox;