import AddContactButton from "./addContactButton";
import DisplayNameInputBox from "./displayNameInputBox";

//This component returns the the above row of the contact list screen.
function AboveContactsRow({ setCurrentChat, isSmall, setSearchedDN }) {
  if (isSmall != true) {
    return (
      <div className="col-sm-4  border-secondary">
        <img
          src={global.currentUser.picture}
          alt=""
          className="userPic profile-image rounded-circle"
        />
        <DisplayNameInputBox setSearchedDN={setSearchedDN} />
        <AddContactButton setCurrentChat={setCurrentChat} />
      </div>
    );
  } else {
    return <></>;
  }
}
export default AboveContactsRow;
