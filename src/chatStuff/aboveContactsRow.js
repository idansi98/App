import AddContactButton from "./addContactButton";

function AboveContactsRow({setCurrentChat}) {

    return (
        <div className="col-sm-4 border-right border-secondary">
        <img
          src={global.currentUser.picture}
          alt=""
          className="profile-image rounded-circle"
        />
        <span className="float-right mt-2">
          <span className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">@</span>
            <input id = "usernameSearch" type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/> 
            <AddContactButton setCurrentChat={setCurrentChat} />
          </span>

        </span>
      </div>
    )
}
export default AboveContactsRow;