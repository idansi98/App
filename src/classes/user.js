class User {
    constructor(userName, displayName, picture, password) {
        this.userName = userName;
        this.displayName = displayName;
        this.picture = picture;
        this.chats = [];
        this.currentChat = null;
        this.password = password;
    }
    addChat(chat) {
        this.chats.push(chat);
    }
    searchChat(user) {
        for (var index in this.chats) {
            if(this.chats[index].user===user) {
                return this.chats[index]
            }
        }
        return false
    }

    sendTextMessage(recieverUserName, text) {
        var reciever = global.userDB.findUserByUserName(recieverUserName);
        if (reciever === false) {
            console.log("Reciever not found while sending a message to " + recieverUserName);
            return;
        }
        global.userDB.sendTextMessage(this,reciever,text);
    }
    sendVideoMessage(recieverUserName, filePath) {
        var reciever = global.userDB.findUserByUserName(recieverUserName);
        if (reciever === false) {
            console.log("Reciever not found while sending a message to " + recieverUserName);
            return;
        }
        global.userDB.sendVideoMessage(this,reciever,filePath);
    }
    sendAudioMessage(recieverUserName, filePath) {
        var reciever = global.userDB.findUserByUserName(recieverUserName);
        if (reciever === false) {
            console.log("Reciever not found while sending a message to " + recieverUserName);
            return;
        }
        global.userDB.sendAudioMessage(this,reciever,filePath);
    }
    sendImageMessage(recieverUserName, filePath) {
        var reciever = global.userDB.findUserByUserName(recieverUserName);
        if (reciever === false) {
            console.log("Reciever not found while sending a message to " + recieverUserName);
            return;
        }
        global.userDB.sendImageMessage(this,reciever,filePath);
    }
    selectChat(chat) {
        this.currentChat = chat;
    }
}

export default User;

/*  create messages -> create chats -> create user
*   leftBar: scan all chats and display
    rightBar: scan all chats and display
    userTypesMessage -> user.selectedChat.addMessage(TextMessage("Hello",true))
*
*/