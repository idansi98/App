import { useNavigate } from 'react-router-dom';
import LoginPage from './LoginPage';
import './ChatPage.css'
import React, { useState } from 'react';
import AboveRow from '../chatStuff/aboveRow';
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
  
  const [currentChat, setCurrentChat] = useState(null)

  const navigate = useNavigate();
  if (global.token === 0) {
    navigate('/login');
    return (
      <LoginPage />
    );
  } else {
    return (
        <div className="back-container">        
          <div className="container-fluid front-container">
            <div className="back-top" />
            <div className="back-main" />
          </div>
          <div className="container front-container1">
            {/*The top row of the chat*/}
            <AboveRow isSmall={tooSmall} setCurrentChat={setCurrentChat} currentChat={currentChat} />
            <MainChatBox isSmall={tooSmall} currentChat={currentChat} setCurrentChat={setCurrentChat}/>
          </div>
        </div>
    );
  } 

}
export default ChatPage;