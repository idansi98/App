import messageStyler from "../classes/messageStyler";
import TextMessage from "../classes/textMessage";
import currentUserHandler from "../classes/currentUserHandler";

//This component defines the functionallity and design of the send button.
function SendButton({
  isSmall,
  inputText,
  setMessageJustSent,
  setInputText,
  setRecorder,
  recorder,
}) {
  var inputBox = document.getElementById("inputMessageBox");

  const sendAudioMessage = function () {
    recorder.stop();
  };

  const buttonPressed = async function () {
    //If not recording.
    if (inputText === "") {
      return;
    }

    var recieverID = global.currentChat.id;
    var recieverServer = "//" +  global.currentChat.server;


    // post message to our user

    const headers = new Headers();
    headers.append('content-type', 'application/json');
    
    var body = `{"content":"${inputText}"}`;
    
    const init = {
      method: 'POST',
      headers,
      body
    };
    var currentServer = 'https://localhost:25565/'
    var fetchString  = currentServer+ "api/contacts/" + recieverID + "/messages"
    fetch(fetchString, init)
    .then((response) => {
      //todo
    })
    .then((text) => {
      // text is the response body
    })
    .catch((e) => {
      // error in e.message
    });




    // post message to the reciever    
    body = `{"from":"${global.currentUser.userName}","to":"${recieverID}","content":"${inputText}"}`;
    
    const init2 = {
      method: 'POST',
      headers,
      body
    };
    var fetchString2 = recieverServer + "/api/transfer" 
    fetch(fetchString2, init2)
    .then((response) => {

      //todo
    })
    .then((text) => {
      // text is the response body
    })
    .catch((e) => {
      // error in e.message
    });
    // end
    inputBox.value = "";
    setInputText("");
  };

  //If not recording.
  if (recorder === null) {
    return (
      <button
        id="Send"
        onClick={buttonPressed}
        type="button"
        className="smallChatButton btn btn-info"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={22}
          height={16}
          fill="currentColor"
          className="smallChatButton bi bi-send"
          viewBox="0 0 16 16"
        >
          <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
        </svg>
      </button>
    );
  } else {
    //If recording.
    return (
      <button
        id="Send"
        onClick={sendAudioMessage}
        type="button"
        className="smallChatButton btn btn-info"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-soundwave"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M8.5 2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-1 0v-11a.5.5 0 0 1 .5-.5zm-2 2a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zm-6 1.5A.5.5 0 0 1 5 6v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm8 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm-10 1A.5.5 0 0 1 3 7v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5zm12 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5z"
          />
        </svg>
      </button>
    );
  }
}

export default SendButton;
