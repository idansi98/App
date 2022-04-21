import { useRef } from "react";
import chatHandler from "./chatFunctions";
function AttachAudio({setMessageJustSent}) {
    const givenAudioBox = useRef(null);

  
    

    const attachAudio = function () {


        const handleSuccess = function(stream) {
          const downloadLink = [];
          const recordButton = document.getElementById('record')
          const options = {mimeType: 'audio/webm'};
          const recordedChunks = [];
          const mediaRecorder = new MediaRecorder(stream, options);
      
          mediaRecorder.addEventListener('dataavailable', function(e) {
            if (e.data.size > 0) recordedChunks.push(e.data);
          });
      
          mediaRecorder.addEventListener('stop', function() {
            downloadLink.href = URL.createObjectURL(new Blob(recordedChunks));
            downloadLink.download = 'acetest.wav';
            var blob = URL.createObjectURL(new Blob(recordedChunks))
            var reciever = global.currentChat.user;
            chatHandler.sendAudioMessage(global.currentUser,reciever,blob);
            givenAudioBox.current.value = ""
            var lastMessageID = global.currentUser.searchChat(reciever).lastMessage.ID
            setMessageJustSent(lastMessageID)
            global.lastMessageID = lastMessageID;
          });


          recordButton.addEventListener('mouseup', function() {
            mediaRecorder.stop();
          }, {once:true});
      
          mediaRecorder.start();
        };
      
        navigator.mediaDevices.getUserMedia({ audio: true, video: false })
            .then(handleSuccess);
    }
    return ( 
        <a className="dropdown-item down noBiggerHover" href="#">
        <div className="file btn btn-lg btn-light Check dropDownButtonOfRecord">
        <button id ="record" 
        ref={givenAudioBox} 
        onMouseDown={attachAudio} 
        title="Hold the recording button to record"
        className="dropDownButton">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={18}
            height={28}
            fill="currentColor"
            className="bi bi-mic dropDownSVG"
            viewBox="0 0 16 16"
          >
            <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
            <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0v5zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z" />
          </svg>
          </button>
          </div>
        </a>
    )
}

export default AttachAudio