import ContactBox from "../typeBoxes/ContactBox";
import ChatBox from "../typeBoxes/ChatBox";
import BottomRow from "./bottomRow";
import React from "react";
import { useState } from "react";
function MainChatBox ({isSmall}) {

  const [currentChat, setCurrentChat] = useState(null);

    if (isSmall==false) {
        return (
            <div className="row">
            <ContactBox setCurrentChat={setCurrentChat}/>
            <div className="col-sm-8 message-area">
              <ChatBox currentChat={currentChat}/>
              <BottomRow isSmall={isSmall}/>
            </div>
          </div>
        )
    } else {
        return (
            <div className="row">
            <div className="col-sm-8 message-area">
              <ChatBox currentChat={currentChat}/>
              <BottomRow isSmall={isSmall}/>
            </div>
          </div>
        )
    }
}
export default MainChatBox;