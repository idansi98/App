class User {
    constructor(name, picture) {
        this.name = name;
        this.picture = picture;
        this.chats = [];
        this.currentChat = null;
    }
    addChat(chat) {
        chats.push(chat);
    }
    selectChat(chat) {
        this.currentChat = chat;
    }
}


/*  create messages -> create chats -> create user
*   leftBar: scan all chats and display
    rightBar: scan all chats and display
    userTypesMessage -> user.selectedChat.addMessage(TextMessage("Hello",true))
*
*/