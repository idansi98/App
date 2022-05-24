import Chat from "./chat";
import User from "./user";
import TextMessage from "./textMessage";
import defaultPFP from "../Media/defaultPFP.png";

    
    async function init() {
      await getSelf();
      await getNewContacts();
      await getNewMessages();
    }




    async function getSelf() {

        // setup user
        var user = await sendGET("api/self")
        if (user === null) {
          return false;
        }
        global.currentUser = new User(user.id ,user.name, defaultPFP,"0")
        return true;
    }


    async function getNewContacts() {
      if (global.currentUser === null) {
        return;
      }
      // save the old chat if exists
      var oldCurrentChatID = null;
      if (global.currentChat !== null) {
        oldCurrentChatID = global.currentChat.id;
      }

      // get all contacts from scratch
      global.currentUser.chats = [];
      var contacts = await sendGET("api/contacts")

      contacts.forEach(contact => {
          var chat = new Chat(contact.id,contact.name,contact.server, defaultPFP);
          global.currentUser.addChat(chat)
      });
      // restore old current chat
      if (oldCurrentChatID !== null) {
        global.currentChat = global.currentUser.searchChat(oldCurrentChatID);
      }
    }


    async function getNewMessages() {
      if (global.currentUser === null) {
        return;
      }
      // get all messages from scratch
      for (const chat of global.currentUser.chats) {
        chat.messages = [] 
        var messages = await sendGET("api/contacts/" + chat.id + "/messages")
        messages.forEach(message => {

            var textMessage = new TextMessage(message.id, message.content, message.sent, message.created)
            chat.addMessage(textMessage)
        });
      }
    }







    async function sendGET(url) {

        let response = await fetch(url);

        if (response.ok) { // if HTTP-status is 200-299
          let json = await response.json();
          return json
        } else {
          return null;
        }
    }
export default {init, sendGET, getNewMessages, getNewContacts}