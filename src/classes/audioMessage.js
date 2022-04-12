class AudioMessage {
    constructor(filePath, isMyMessage) {
        this.filePath = filePath;
        this.isMyMessage = isMyMessage;
    }
    get html() {
        return;
    }
    get shortForm() {
        return ("Audio");
    }
}