import ContactBox from "./ContactBox";
import ChatBox from "./ChatBox";
import BottomRow from "./bottomRow";
import React from "react";
import { useState, useEffect} from "react";
function MainChatBox ({isSmall, currentChat, setCurrentChat, searchedDN}) {


  // update the time on contactBox

  const [time, setTime] = useState(Date.now());
  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

    // contains the ID of the last message sent by the current user (not recieved)
    const [messageJustSent, setMessageJustSent] = useState(-1);
    return (
      
      <div className="row">
      <ContactBox setCurrentChat={setCurrentChat} isSmall={isSmall} searchedDN={searchedDN} time={time}/>
      <div className="col-sm-8 message-area">
        <ChatBox currentChat={currentChat} messageJustSent={messageJustSent}/>
        <BottomRow isSmall={isSmall} setMessageJustSent={setMessageJustSent} messageJustSent={messageJustSent} currentChat={currentChat}/>
      </div>
    </div>
  )
}
export default MainChatBox;