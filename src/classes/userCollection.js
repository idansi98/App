import Chat from "./chat";
import User from "./user";
import TextMessage from "./textMessage";
import AudioMessage from "./audioMessage";
import ImageMessage from "./imageMessage";
import VideoMessage from "./videoMessage";


class UserCollection {
    constructor() {
        this.users = []
    }
    addUser(userName, displayName, picture, password) {
        this.users.push(new User(userName, displayName, picture,password));
    }

    findUserByUserName(userName) {
        for (this.index in this.users) {
            if (this.users[this.index].userName === userName) {
                return this.users[this.index];
            }
        }
        return false;
    }

    sendMessage(sender, reciever, message) {
        var chatOfSender = sender.searchChat(reciever);
        var chatOfReciever = reciever.searchChat(sender);


        if (chatOfSender === false) {
            sender.addChat(new Chat(reciever));
            reciever.addChat(new Chat(sender));
            chatOfSender = sender.searchChat(reciever);
            chatOfReciever = reciever.searchChat(sender);
            
        }
            chatOfSender.addMessage(message);
            chatOfReciever.addMessage(message);

    }
    sendTextMessage(sender, reciever, text) {
        this.sendMessage(sender, reciever, new TextMessage(text,sender));
    }
    sendAudioMessage(sender, reciever, filePath) {
        this.sendMessage(sender, reciever, new AudioMessage(filePath,sender));
    }
    sendVideoMessage(sender, reciever, filePath) {
        this.sendMessage(sender, reciever, new VideoMessage(filePath,sender));
    }
    sendImageMessage(sender, reciever, filePath) {
        this.sendMessage(sender, reciever, new ImageMessage(filePath,sender));
    }

    getChatBetween(sender, reciever) {
        var foundChat = sender.searchChat(reciever);
        if (foundChat === false) {
            return false;
        } else {
            return foundChat;
        }
    }
    // returns user
    login(userName, password) {
        for (var index in this.users) {
            var user = this.users[index];
            if (user.userName === userName && user.password === password) {
                return user;
            }
        }
        return false;
    }
    // returns a message array
    getMessagesBetween(sender, reciever) {
        var chat = this.getChatBetween(sender, reciever);
        if (chat !== false) {
            return chat.messages;
        }
    }

    // returns a String
    getLastMessageBetween(sender, reciever) {
        var chat = this.getChatBetween(sender,reciever);
        if (chat !== false) {
            return chat.lastMessage.shortForm();
        }
        return "";
    }
}

export default UserCollection;