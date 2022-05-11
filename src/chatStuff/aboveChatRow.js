//This component returns the the above row of the chat screen(not the contacts list).
function AboveChatRow({ currentChat }) {
  var contactName = null;
  var contactPic = null;
  if (currentChat != null) {
    contactName = currentChat.displayName;
    contactPic = currentChat.picture;
    return (
      <div className="col-sm-8">
        {/*The contact's profile picture*/}
        <img
          src={contactPic}
          alt=""
          className="profile-image rounded-circle"
          id="currentChatPFP"
        />
        <span className="ml-2" id="currentChatContactName">
          {contactName}
        </span>
      </div>
    );
  } else {
    <div className="col-sm-8">
      {/*The contact's profile picture*/}
      <span className="ml-2"></span>
    </div>;
  }
}
export default AboveChatRow;
