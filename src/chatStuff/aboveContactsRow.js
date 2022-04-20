import AddContactButton from "./addContactButton";
import DisplayNameInputBox from "./displayNameInputBox";

function AboveContactsRow({ setCurrentChat, isSmall, setSearchedDN}) {
  if (isSmall != true) {
    return (
      <div className="col-sm-4  border-right border-secondary">
        <img
          src={global.currentUser.picture}
          alt=""
          className="profile-image rounded-circle"
        />
        <span className=" float-right mt-2" >
          <span className="input-group mb-3">
          <DisplayNameInputBox setSearchedDN={setSearchedDN}/>
               <span>
            <AddContactButton setCurrentChat={setCurrentChat} />
            </span>
          </span>
        </span>
      </div>
    )
  } else {
    return <></>
  }

}
export default AboveContactsRow;