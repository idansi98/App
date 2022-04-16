import { render } from "@testing-library/react";
import { useRef } from "react";
import ImageMessage from "../classes/imageMessage";
import VideoMessage from "../classes/videoMessage";
import chatHandler from "../functions/chatFunctions";

function AttachmentButton({isSmall, setMessageJustSent}) {
  const givenImageBox = useRef(null);
  const givenVideoBox = useRef(null);
  const givenAudioBox = useRef(null);

  const options = {mimeType: 'audio/webm'};
  const recordedChunks = [];
  var mediaRecorder = null;

  var file = null;
  const reader = new FileReader();

    const attachImage = function () {
      file = givenImageBox.current.files[0]
      console.log(file)
      if (file) {
          reader.readAsDataURL(file)
      }
      reader.onload = function () {
        var reciever = global.currentChat.user;
        chatHandler.sendImageMessage(global.currentUser,reciever,reader.result);
        givenImageBox.current.value = ""
        setMessageJustSent(global.lastMessageID)
       
      }
      reader.onerror = function () {
          console.log(reader.error);
      }
    }


    const attachVideo = function () {
      file = givenVideoBox.current.files[0]
      console.log(file)
      if (file) {
          reader.readAsDataURL(file)
      }
      reader.onload = function () {
        var reciever = global.currentChat.user;
        chatHandler.sendVideoMessage(global.currentUser,reciever,reader.result);
        givenVideoBox.current.value = ""
        setMessageJustSent(global.lastMessageID)
      }
      reader.onerror = function () {
          console.log(reader.error);
      }
    }


    
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
            givenVideoBox.current.value = ""
            setMessageJustSent(global.lastMessageID)
          });


          recordButton.addEventListener('mouseup', function() {
            mediaRecorder.stop();
          });
      
          mediaRecorder.start();
        };
      
        navigator.mediaDevices.getUserMedia({ audio: true, video: false })
            .then(handleSuccess);
    }

    return (
        <div className="col-sm-2 mt-2">
                    {/*The attachment button*/}
                    <button className="btn btn-info dropdown-toggle" type="button" id="dropdownAttach" data-bs-toggle="dropdown" aria-expanded="false">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-paperclip" viewBox="0 0 16 16">
                        <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z" />
                      </svg>
                    </button>

                    <ul className="dropdown-menu" aria-labelledby="dropdownAttach" id = "UL">
                    <div id = "WRAP">
                      <li><a className="dropdown-item" href="#">
                      <input ref={givenImageBox} onChange={attachImage} type="file" accept = "image/*"  />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={18}
                          height={28}
                          fill="currentColor"
                          className="bi bi-camera"
                          viewBox="0 0 16 16" >
                          <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z" />
                          <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                        </svg>
                      </a>

                        <a className="dropdown-item" href="#">
                        <input ref={givenVideoBox} onChange={attachVideo} type="file" accept = "video/*"  />
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-camera-reels" viewBox="0 0 16 16">
                            <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM1 3a2 2 0 1 0 4 0 2 2 0 0 0-4 0z" />
                            <path d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7zm6 8.73V7.27l-3.5 1.555v4.35l3.5 1.556zM1 8v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1z" />
                            <path d="M9 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM7 3a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />

                          </svg>
         
                        </a>
                        

                        <a className="dropdown-item" href="#">
                        <button id ="record" ref={givenAudioBox} onMouseDown={attachAudio} > Hold to record</button>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            fill="currentColor"
                            className="bi bi-mic"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                            <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0v5zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z" />
                          </svg>

                        </a>
                      </li>
                      </div>
                    </ul>
                    
                  </div>
    )
}
export default AttachmentButton;