import chatHandler from "./chatFunctions";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import snackbar from "../classes/snackbarHelper";

function AddContactButton({ setCurrentChat }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const addNewChat = function () {
    var userToStartChatWith = document.getElementById("usernameSearch").value;
    if (userToStartChatWith === global.currentUser.userName) {
      snackbar.showMessage("You can't start messaging yourself!");
      return;
    }
    var foundUser = chatHandler.findUser(userToStartChatWith);
    if (foundUser == null) {
      snackbar.showMessage("User not found");
      return;
    } else if (global.currentUser.searchChat(foundUser) != null) {
      snackbar.showMessage("User already added");
      return;
    } else {
      chatHandler.makeBlankChat(global.currentUser, foundUser);
      var currentChat = global.currentUser.searchChat(
        chatHandler.findUser(userToStartChatWith)
      );
      global.currentChat = currentChat;
      setCurrentChat(currentChat);
    }
    handleClose();
  };

  return (
    <>
      <Button id="addContactButton" className="" onClick={handleShow}>
        <svg
          id="addContactButtonSVG"
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

      <Modal show={show} onHide={handleClose} className="themedModal">
        <Modal.Header id="findContactHeader" closeButton>
          <Modal.Title>Add Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body id="findContactBody">
          <input
            id="usernameSearch"
            type="text"
            className="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </Modal.Body>
        <Modal.Footer id="findContactFooter">
          <Button
            variant="primary"
            onClick={addNewChat}
            id="addContactConfirmationButton"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-journal-plus"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 5.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 .5-.5z"
              />
              <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
              <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
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
