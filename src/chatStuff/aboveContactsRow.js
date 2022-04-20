import AddContactButton from "./addContactButton";
import Example from "./example";

function AboveContactsRow({ setCurrentChat, isSmall }) {
  if (isSmall != true) {
    return (
      <div className="col-sm-4 border-right border-secondary">
        <img
          src={global.currentUser.picture}
          alt=""
          className="profile-image rounded-circle"
        />
        <Example />
        <span className="float-right mt-2" >
          <span className="input-group mb-3">
          <span id ="Hey">
              <input type="text" className="form-control" placeholder="Displayname"
               aria-label="Username" aria-describedby="basic-addon1" id="DisplayNameInput"/>
               </span>
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