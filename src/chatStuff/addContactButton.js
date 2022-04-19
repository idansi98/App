import chatHandler from "./chatFunctions";
import { useState } from "react";
import { Modal, Button } from 'react-bootstrap'

function AddContactButton({ setCurrentChat }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const addNewChat = function () {
    var userToStartChatWith = document.getElementById("usernameSearch").value;
    if (userToStartChatWith === global.currentUser.userName) {
      alert("You can't start messaging yourself!");
      var audio = new Audio('donkey.ogg');
      audio.play();
      return;
    }
    var foundUser = chatHandler.findUser(userToStartChatWith);
    if (foundUser == null) {
      alert("User not found");
      var audio = new Audio('donkey.ogg');
      audio.play();
      return
    } else if (global.currentUser.searchChat(foundUser) != null) {
      alert("User already added!");
      var audio = new Audio('donkey.ogg');
      audio.play();
      return
    } else {
      chatHandler.makeBlankChat(global.currentUser, foundUser);
      var currentChat = global.currentUser.searchChat(chatHandler.findUser(userToStartChatWith))
      global.currentChat = currentChat
      setCurrentChat(currentChat)
      var audio = new Audio('newChat.wav');
      audio.play();
    }
    handleClose()
  }


  return (
    <>
      <Button className="nextButton" onClick={handleShow}>
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
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add user by username</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input id="usernameSearch" type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={addNewChat}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-journal-plus" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 5.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 .5-.5z"/>
          <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
          <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
        </svg>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
  /*
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
  ) */

}

export default AddContactButton;