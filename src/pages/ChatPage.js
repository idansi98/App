import { useNavigate } from 'react-router-dom';
import ChatWindow from '../chatStuff/ChatWindow';
import LoginPage from './LoginPage';
import ContactBox from '../typeBoxes/ContactBox';
import Chat from '../classes/chat';
import TextMessage from '../classes/textMessage';
import './ChatPage.css'
import ChatBox from '../typeBoxes/ChatBox';
import UserCollection from '../classes/userCollection';
import User from '../classes/user';
import React from 'react';
import InputMessageBox from '../typeBoxes/inputMessageBox';
import SendButton from '../chatStuff/sendButton';
import AboveChatRow from '../chatStuff/aboveChatRow';
import AboveContactsRow from '../chatStuff/aboveContactsRow';
import AboveRow from '../chatStuff/aboveRow';
import AttachmentButton from '../chatStuff/attachmentButton';
import BottomRow from '../chatStuff/bottomRow';
import MainChatBox from '../chatStuff/mainChatBox';


function ChatPage() {


  
  // update when resizing
  
  const [tooSmall, setTooSmall] = React.useState(false);
  React.useEffect(() => {
    function checkForTooSmall() {
      if (window.innerWidth > 575) {
        if (tooSmall === true) {
          setTooSmall(false);
        }
      } else {
        if (tooSmall === false) {
          setTooSmall(true)
        }
      }
    }
    window.addEventListener('resize', checkForTooSmall)
  })
  

  const navigate = useNavigate();
  if (global.token === 0) {
    navigate('/login');
    return (
      <LoginPage />
    );
  } else {
    console.log(tooSmall)
    return (
        <div className="back-container">        
          <div className="container-fluid front-container">
            <div className="back-top" />
            <div className="back-main" />
          </div>
          <div className="container front-container1">
            {/*The top row of the chat*/}
            <AboveRow isSmall={tooSmall}/>
            <MainChatBox isSmall={tooSmall}/>
          </div>
        </div>
    );
  } 

}
export default ChatPage;