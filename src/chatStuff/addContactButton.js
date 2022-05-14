import chatHandler from "./chatFunctions";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import snackbar from "../classes/snackbarHelper";
import Chat from "../classes/chat";
import defaultPFP from "../media/defaultPFP.png"

//This component defines the functionallity and design of the Add contact button.
function AddContactButton({ setCurrentChat }) {
  //We use the useState hook here, so the screen will be updated due to chat's addition.
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const addNewChat = function () {
    var usernameToAdd = document.getElementById("usernameToAdd").value;
    var nicknameToAdd = document.getElementById("nicknameToAdd").value;
    var serverToAdd = document.getElementById("serverToAdd").value;
    // in case it ends with /
    if (serverToAdd.slice(-1) == "/") { 
      serverToAdd = serverToAdd.slice(0,-1);
    }
    if (usernameToAdd === global.currentUser.userName) {
      snackbar.showMessage("You can't start messaging yourself!");
      return;
    }
    console.log("Global:")
    console.log(global.currentUser)
    console.log("New to add:")
    console.log(usernameToAdd)

    // add locally
    const headers = new Headers();
    headers.append('content-type', 'application/json');

    const body = `{"id":"${usernameToAdd}","name":"${nicknameToAdd}","server":"${serverToAdd}"}`;

    const init = {
      method: 'POST',
      headers,
      body
    };

     fetch('https://localhost:7100/api/contacts', init)
    .then((response) => {
      if (response.ok === false) {
        snackbar.showMessage("The user could not be added");
      } else {
          // add to 2nd server
          //TODO: make sure server adress is known


          var serverAdress = "localhost:7100"
          const body = `{"from":"${global.currentUser.userName}","to":"${usernameToAdd}","server":"${serverAdress}"}`;

          const init2 = {
            method: 'POST',
            headers,
            body
          };

          fetch('https://localhost:7100/api/invitations', init2)
          .then((response) => {
            if (response.ok  === false) {
              snackbar.showMessage("The user could not be added");
              // delete the user we created on our side:
              const init3 = {
                method: 'DELETE'
              };
              var fetchString = "https://localhost:7100/api/contacts/" + usernameToAdd;
              fetch(fetchString, init3)
              .then((response) => {
                // empty for rn
              })
              .then((text) => {
              })
              .catch((e) => {
              });
            } else {
                  // here the user is updated on both server, now we just need to update current chat
                  var chat = new Chat(usernameToAdd,nicknameToAdd,serverToAdd, defaultPFP);
                  global.currentUser.addChat(chat)
                  global.currentChat = chat;
                  setCurrentChat(chat);
                  handleClose();
            }
          })
          .then((text) => {
          })
          .catch((e) => {
          });
      }
    })
    .then((text) => {
    })
    .catch((e) => {
    });
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
            id="nicknameToAdd"
            type="text"
            className="form-control"
            placeholder="Nickname"
            aria-label="Nickname"
            aria-describedby="basic-addon1"
          />
          <input
          id="usernameToAdd"
          type="text"
          className="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon2"
        />
        <input
        id="serverToAdd"
        type="text"
        className="form-control"
        placeholder="Server Adress"
        aria-label="Server Adress"
        aria-describedby="basic-addon3"
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
