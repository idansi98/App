function ContactBox ({setCurrentChat, searchedUser}) {
    var chats = global.currentUser.chats
    var contactsHTML = [];

  const calcContactsHTML = function (contactsHTML, chats) {
    for (var index in chats) {
      //if (chats[index].user.userName.includes(searchedUser))
      contactsHTML.push(chats[index].contactHTML({setCurrentChat}));
    }
  }
    calcContactsHTML(contactsHTML,chats)


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
}
export default ContactBox;