class Chat {
    constructor(name, picture) {
        this.name = name;
        this.picture = picture;
        this.messages = [];
    }
    addMessage(chat) {
        messages.push(chat);
    }
    get lastMessage() {
        return messages[messages.length -1];
    }
    // the ID of each element is the position in the array 
    get contactHTML() {
        return;
    }
    // gets the full HTML of all the convo
    get convoHTML() {
        return;
    }
}


