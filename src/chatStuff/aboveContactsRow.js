import AddContactButton from "./addContactButton";
import Example from "./example";

function AboveContactsRow({setCurrentChat, isSmall}) {
  if(isSmall!=true) {
    return (
      <div className="col-sm-4 border-right border-secondary">
      <img
        src={global.currentUser.picture}
        alt=""
        className="profile-image rounded-circle"
      />
      <Example />
      <span className="float-right mt-2">
        <span className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">@</span>
          <AddContactButton setCurrentChat={setCurrentChat} />
        </span>
      </span>
    </div>
  )
  } else{
    return <></>
  }

}
export default AboveContactsRow;