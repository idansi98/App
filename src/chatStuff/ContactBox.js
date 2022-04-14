function ContactBox ({chats}) {
    var contactsHTML = [];
    for (var index in chats) {
        contactsHTML.push(chats[index].contactHTML) ;
      }

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