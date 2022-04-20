import { useNavigate } from 'react-router-dom';
import LoginPage from '../registerAndLoginStuff/LoginPage';
import './ChatPage.css'
import React, { useState } from 'react';
import AboveRow from './aboveRow';
import MainChatBox from './mainChatBox';
import BlueBackground from '../registerAndLoginStuff/BlueBackGround';


function ChatPage() {


  
  // update when resizing
  
  const [tooSmall, setTooSmall] = useState(false)
  const [currentChat, setCurrentChat] = useState(null)
  const [searchedDN, setSearchedDN] = useState("")

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
  if (global.currentUser == null) {
    navigate('/login');
    return (
      <LoginPage />
    );
  } else {
    return (
        <div className="back-container">        
          <div className="container-fluid front-container no-padding ">
          <BlueBackground />
          </div>
          <div className="container front-container1">
            {/*The top row of the chat*/}
            <AboveRow isSmall={tooSmall} setCurrentChat={setCurrentChat} currentChat={currentChat} setSearchedDN={setSearchedDN}/>
            <MainChatBox isSmall={tooSmall} currentChat={currentChat} setCurrentChat={setCurrentChat} searchedDN={searchedDN}/>
          </div>
        </div>
    );
  } 

}
export default ChatPage;