import ContactBox from "../typeBoxes/ContactBox";
import ChatBox from "../typeBoxes/ChatBox";
import BottomRow from "./bottomRow";
import React from "react";
import { useState } from "react";
function MainChatBox ({isSmall, searchedUser, currentChat, setCurrentChat}) {



  //var intervalID = setInterval(updateContactBox, 1000000);


    const [messageJustSent, setMessageJustSent] = useState(-1);

    if (isSmall==false) {
        return (
            <div className="row">
            <ContactBox setCurrentChat={setCurrentChat} searchedUser={searchedUser}/>
            <div className="col-sm-8 message-area">
              <ChatBox currentChat={currentChat} messageJustSent={messageJustSent}/>
              <BottomRow isSmall={isSmall} setMessageJustSent={setMessageJustSent} messageJustSent={messageJustSent} currentChat={currentChat}/>
            </div>
          </div>
        )
    } else {
        return (
            <div className="row">
            <div className="col-sm-8 message-area">
              <ChatBox currentChat={currentChat} messageJustSent={messageJustSent}/>
              <BottomRow isSmall={isSmall} setMessageJustSent={setMessageJustSent} messageJustSent={messageJustSent} currentChat={currentChat}/>
            </div>
          </div>
        )
    }
}
export default MainChatBox;