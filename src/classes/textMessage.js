class TextMessage {
    constructor(text, sender) {
        this.text = text;
        this.sender = sender;
        this.dateTime = new Date().getTime();
    }
    get html() {
        return;
    }
    //TODO: make it so text isnt longer than 3-4 words
    get shortForm() {
        return (this.text);
    }
}

export default TextMessage;
