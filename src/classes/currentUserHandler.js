import Chat from "./chat";
import User from "./user";
import TextMessage from "./textMessage";
import defaultPFP from "../Media/defaultPFP.png";

    
    async function init() {
        // setup user
      var user = await this.sendGET("api/self")
      var currentUser = new User("0",user.name, defaultPFP,"0")
      global.currentUser = currentUser

      // set up his contacts
      var contacts = await this.sendGET("api/contacts")
      console.log(contacts)
      contacts.forEach(contact => {
          var chat = new Chat(contact.id,contact.name,contact.server, defaultPFP);
          currentUser.addChat(chat)
      });

      // set up the messages from contact
      for (const chat of currentUser.chats) {

        var realID =  chat.id.split(':')[0]
        var messages = await this.sendGET("api/contacts/" + realID + "/messages")
        messages.forEach(message => {

            var textMessage = new TextMessage(message.id, message.content, message.sent, message.created)
            chat.addMessage(textMessage)
        });
      }


    }

    async function sendPOST(url, data) {
        fetch(url, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }).then (result => {
            return JSON.parse(result)
        })
    }

    async function sendGET(url) {
        let response = await fetch(url);

        if (response.ok) { // if HTTP-status is 200-299
          let json = await response.json();
          return json
        } else {
          alert("HTTP-Error: " + response.status);
        }
    }
export default {init, sendPOST, sendGET}