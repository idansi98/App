import chatHandler from "../functions/chatFunctions";

function AddContactButton ({setCurrentChat}) { 

    const addNewChat = function () {
        var userToStartChatWith = document.getElementById("usernameSearch").value;
        if (userToStartChatWith === global.currentUser.userName) {
            alert("You can't start messaging yourself!");
            return;
        } 
        var foundUser = chatHandler.findUser(userToStartChatWith);
        if (foundUser == null) {
            alert("User not found");
            return
        } else if (global.currentUser.searchChat(foundUser) != null) {
            alert("User already added!");
            return
        } else {
          chatHandler.makeBlankChat(global.currentUser, foundUser);
          var currentChat = global.currentUser.searchChat(chatHandler.findUser(userToStartChatWith))
          global.currentChat = currentChat
          setCurrentChat(currentChat)
        }
    }
    return (
        
        <button type="button" onClick={addNewChat} className="btn btn-light" id = "AddContact">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            fill="currentColor"
            className="bi bi-person-plus-fill"
            viewBox="0 0 16 16"
          >
            <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            <path
              fillRule="evenodd"
              d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
            />
          </svg>
          </button>
    )
}

export default AddContactButton;