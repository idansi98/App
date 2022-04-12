function ContactBox ({chats}) {
    var contactsHTML;
    for (var index in chats) {
        contactsHTML += chats[index].contactHTML;
    }

    return (
        <div className="col-sm-4 contacts">
                  <div className="contact-table-scroll">
                    <table className="table table-hover">
                      <tbody>
                      {chats[0].contactHTML}
                      {chats[1].contactHTML}
                      </tbody>
                    </table>
                  </div>
                </div>
    );
}
export default ContactBox;