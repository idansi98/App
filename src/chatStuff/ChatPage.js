import { useNavigate } from "react-router-dom";
import LoginPage from "../registerAndLoginStuff/LoginPage";
import "./ChatPage.css";
import React, { useState, useEffect } from "react";
import AboveRow from "./aboveRow";
import MainChatBox from "./mainChatBox";
import BlueBackground from "../registerAndLoginStuff/BlueBackGround";
import Snackbar from "../registerAndLoginStuff/snackbar";
import snackbarHelper from "../classes/snackbarHelper";
import currentUserHandler from "../classes/currentUserHandler";
import $ from 'jquery';
import {
  JsonHubProtocol,
  HubConnectionState,
  HubConnectionBuilder,
  LogLevel
} from '@microsoft/signalr';



//This component returns the whole chatpage it's sub components.
 function ChatPage() {
  const [justLoggedIn, setJustLoggedIn] = useState(false);
  const [tooSmall, setTooSmall] = useState(false);
  const [currentChat, setCurrentChat] = useState(null);
  const [lastMessageSent, setLastMessageSent] = useState(null);
  const [searchedDN, setSearchedDN] = useState("");
  const [contacts, setContacts] = useState("");
  var currentlyProcessing = 0;
  //We use the useNavigate here, because if you entered the chat page without loging before, you should be directed back to Login page.
  const navigate = useNavigate();


  async function forceUpdate() {
    if (currentlyProcessing ===0) {
      currentlyProcessing += 1;
      await currentUserHandler.init();
      // to update react
      setLastMessageSent(Date.now()); 
      currentlyProcessing -=1;
    } else {
      window.setTimeout(forceUpdate, 40);
    }
  }

  async function newChat() {
    if (currentlyProcessing ===0) {
      currentlyProcessing += 1;
      await currentUserHandler.getNewContacts();
      await currentUserHandler.getNewMessages();
      setCurrentChat(global.currentChat);
      currentlyProcessing -=1;
    } else {
      window.setTimeout(newChat, 40);
    }
  }

  async function newMessage() {
    if (currentlyProcessing ===0) {
      currentlyProcessing += 1;
      await currentUserHandler.getNewMessages();
      // only setting current chat so react reloads the page
      setLastMessageSent(Date.now()); 
      currentlyProcessing -=1;
    } else {
      window.setTimeout(newMessage, 40);
    }
  }

  async function tryConnection() {
    if (global.currentConnection === null) {
      var connection = new HubConnectionBuilder().withUrl("/Myhub").build();
      global.currentConnection = connection;
      await connection.start();
      connection.on("ForceUpdate", forceUpdate);
      connection.on("NewChat", newChat);
      connection.on("NewMessage", newMessage);
      
    }
  }
  tryConnection();



  // init if not already init  

  const getNewUser = async function () {
    if (global.currentUser === null) {
      await currentUserHandler.init();
      if (global.currentUser === null) {
        navigate("/login");
     } else {
       setJustLoggedIn(true);
     }
    }
  }


  useEffect( () => {
    getNewUser();
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

  
  if (global.currentUser == null) {
    return (<div> </div>);
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
          lastMessageSent = {lastMessageSent}
        />
      </div>
      <Snackbar />
      {/* SignalR*/}
      {/*<script src ="~/lib/microsoft-signalr/signalr.js"> </script>*/}
    </div>
  );
}
export default ChatPage;
