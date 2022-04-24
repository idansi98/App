import ContactBox from "./ContactBox";
import ChatBox from "./ChatBox";
import BottomRow from "./bottomRow";
import React from "react";
import { useState, useEffect } from "react";

//This component returns the MainChatBox, depending on the arguments.
function MainChatBox({ isSmall, currentChat, setCurrentChat, searchedDN }) {
  //Contains the ID of the last message sent by the current user (not recieved).
  const [messageJustSent, setMessageJustSent] = useState(-1);

  //Here it also depends on the Window's width.
  if (isSmall === false) {
    return (
      <div className="row">
        <ContactBox
          setCurrentChat={setCurrentChat}
          isSmall={isSmall}
          searchedDN={searchedDN}
        />
        <div className="col-sm-8 message-area">
          <ChatBox
            currentChat={currentChat}
            messageJustSent={messageJustSent}
          />
          <BottomRow
            isSmall={isSmall}
            setMessageJustSent={setMessageJustSent}
            messageJustSent={messageJustSent}
            currentChat={currentChat}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="row">
        <ContactBox
          setCurrentChat={setCurrentChat}
          isSmall={isSmall}
          searchedDN={searchedDN}
        />
        <div className="fullScreenWidth col-sm-8 message-area">
          <ChatBox
            currentChat={currentChat}
            messageJustSent={messageJustSent}
          />
          <BottomRow
            isSmall={isSmall}
            setMessageJustSent={setMessageJustSent}
            messageJustSent={messageJustSent}
            currentChat={currentChat}
          />
        </div>
      </div>
    );
  }
}
export default MainChatBox;
