import Chat from "./chat";
import User from "./user";
import TextMessage from "./textMessage";
import AudioMessage from "./audioMessage";
import ImageMessage from "./imageMessage";
import VideoMessage from "./videoMessage";

class UserCollection {
  constructor() {
    this.users = [];
  }

  //Adds new user to the users array.
  addUser(userName, displayName, picture, password) {
    this.users.push(new User(userName, displayName, picture, password));
  }

  //Finds a user by his username.
  findUserByUserName(userName) {
    for (this.index in this.users) {
      if (this.users[this.index].userName === userName) {
        return this.users[this.index];
      }
    }
    return null;
  }
  /*
     //Finds a user by his displayname.
     findUserByDisplayName(displayName) {
        for (this.index in this.users) {
            if (this.users[this.index].displayName === displayName) {
                return this.users[this.index];
            }
        }
        return null;
    }
    */

  //Sends a new message between the sender to the reciever.
  sendMessage(sender, reciever, message) {
    var chatOfSender = sender.searchChat(reciever);
    var chatOfReciever = reciever.searchChat(sender);

    if (chatOfSender === null) {
      sender.addChat(new Chat(reciever));
      reciever.addChat(new Chat(sender));
      chatOfSender = sender.searchChat(reciever);
      chatOfReciever = reciever.searchChat(sender);
    }
    chatOfSender.addMessage(message);
    chatOfReciever.addMessage(message);
  }

  //Specific messages.
  sendTextMessage(sender, reciever, text) {
    this.sendMessage(sender, reciever, new TextMessage(text, sender));
  }
  sendAudioMessage(sender, reciever, filePath) {
    this.sendMessage(sender, reciever, new AudioMessage(filePath, sender));
  }
  sendVideoMessage(sender, reciever, filePath) {
    this.sendMessage(sender, reciever, new VideoMessage(filePath, sender));
  }
  sendImageMessage(sender, reciever, filePath) {
    this.sendMessage(sender, reciever, new ImageMessage(filePath, sender));
  }

  //Returns a chat between two users.
  getChatBetween(sender, reciever) {
    var foundChat = sender.searchChat(reciever);
    if (foundChat === null) {
      return null;
    } else {
      return foundChat;
    }
  }

  //Returns user.
  login(userName, password) {
    for (var index in this.users) {
      var user = this.users[index];
      if (user.userName === userName && user.password === password) {
        return user;
      }
    }
    return null;
  }

  //Returns an array of messages.
  getMessagesBetween(sender, reciever) {
    var chat = this.getChatBetween(sender, reciever);
    if (chat !== null) {
      return chat.messages;
    }
  }

  //Returns the last message in a chat.
  getLastMessageBetween(sender, reciever) {
    var chat = this.getChatBetween(sender, reciever);
    if (chat !== null) {
      return chat.lastMessage.shortForm();
    }
    return "";
  }
}

export default UserCollection;
