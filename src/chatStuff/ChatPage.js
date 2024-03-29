import { useNavigate } from "react-router-dom";
import LoginPage from "../registerAndLoginStuff/LoginPage";
import "./ChatPage.css";
import React, { useState, useEffect } from "react";
import AboveRow from "./aboveRow";
import MainChatBox from "./mainChatBox";
import BlueBackground from "../registerAndLoginStuff/BlueBackGround";
import Snackbar from "../registerAndLoginStuff/snackbar";
import snackbarHelper from "../classes/snackbarHelper";

//This component returns the whole chatpage it's sub components.
function ChatPage() {
  const [tooSmall, setTooSmall] = useState(false);
  const [currentChat, setCurrentChat] = useState(null);
  const [searchedDN, setSearchedDN] = useState("");

  //We use the useNavigate here, because if you entered the chat page without loging before, you should be directed back to Login page.
  const navigate = useNavigate();
  useEffect(() => {
    if (global.currentUser == null) {
      navigate("/login");
    }
    snackbarHelper.setClass("snackbarChat");
    document.title = "Chats";
    //In this function we customize our chatpage depending on how wide our window is.
    function checkForTooSmall() {
      if (window.innerWidth > 800) {
        if (tooSmall === true) {
          setTooSmall(false);
        }
      } else {
        if (tooSmall === false) {
          setTooSmall(true);
        }
      }
    }
    window.addEventListener("resize", checkForTooSmall);
  });

  //Just dummy return.
  if (global.currentUser == null) {
    return <div> </div>;
  }

  return (
    <div className="back-container">
      <div className="container-fluid front-container no-padding ">
        <BlueBackground />
      </div>
      <div className="container front-container1">
        {/*The top row of the chat*/}
        <AboveRow
          isSmall={tooSmall}
          setCurrentChat={setCurrentChat}
          currentChat={currentChat}
          setSearchedDN={setSearchedDN}
        />
        <MainChatBox
          isSmall={tooSmall}
          currentChat={currentChat}
          setCurrentChat={setCurrentChat}
          searchedDN={searchedDN}
        />
      </div>
      <Snackbar />
    </div>
  );
}
export default ChatPage;
