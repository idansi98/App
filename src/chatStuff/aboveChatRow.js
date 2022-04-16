function AboveChatRow({currentChat}) {
  var contactName = null;
  var contactPic = null;
  if (currentChat != null) {
    contactName = currentChat.user.displayName;
    contactPic = currentChat.user.picture;
    return ( 
      <div className="col-sm-8">
              {/*The contact's profile picture*/}
              <img
                src={contactPic}
                alt=""
                className="profile-image rounded-circle"
              />
              
              <span className="ml-2">{contactName}</span>
              {/*The two right buttons*/}
              <span className="float-right mt-2">
                {/*The right button*/}
                <svg
                  width={22}
                  height={22}
                  viewBox="0 0 16 16"
                  className="bi bi-three-dots-vertical mx-3"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
                  />
                </svg>
              </span>
            </div>
  )
  } else {
    <div className="col-sm-8">
    {/*The contact's profile picture*/}
    <span className="ml-2"></span>
    {/*The two right buttons*/}
    <span className="float-right mt-2">
      {/*The right button*/}
      <svg
        width={22}
        height={22}
        viewBox="0 0 16 16"
        className="bi bi-three-dots-vertical mx-3"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
        />
      </svg>
    </span>
  </div>
  }
    
}
export default AboveChatRow;