function ContactBox ({chats}) {
    console.log(chats[0].name);
    var contactsHTML;
    for (var index in chats) {
        console.log(chats[index].contactHTML)
        contactsHTML += chats[index].contactHTML;
    }

    return (
        <div className="col-sm-4 contacts">
                  <div className="contact-table-scroll">
                    <table className="table table-hover">
                      <tbody>
                      {chats[0].contactHTML}
                      {chats[1].contactHTML}
                      {contactsHTML}
                      </tbody>
                    </table>
                  </div>
                </div>
    );
}
export default ContactBox;