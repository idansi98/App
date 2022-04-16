import ContactBox from "./ContactBox";
import ChatBox from "./ChatBox";
import BottomRow from "./bottomRow";
import React from "react";
import { useState } from "react";
function MainChatBox ({isSmall, searchedUser, currentChat, setCurrentChat}) {



  //var intervalID = setInterval(updateContactBox, 1000000);


    const [messageJustSent, setMessageJustSent] = useState(-1);
    return (
      <div className="row">
      <ContactBox setCurrentChat={setCurrentChat} searchedUser={searchedUser} isSmall={isSmall}/>
      <div className="col-sm-8 message-area">
        <ChatBox currentChat={currentChat} messageJustSent={messageJustSent}/>
        <BottomRow isSmall={isSmall} setMessageJustSent={setMessageJustSent} messageJustSent={messageJustSent} currentChat={currentChat}/>
      </div>
    </div>
  )
}
export default MainChatBox;