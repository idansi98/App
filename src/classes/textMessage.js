class TextMessage {
    constructor(text, isMyMessage) {
        this.text = text;
        this.isMyMessage = isMyMessage;
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
