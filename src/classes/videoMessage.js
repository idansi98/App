class VideoMessage {
    constructor(filePath, sender) {
        this.filePath = filePath;
        this.sender = sender;
        this.dateTime = new Date().getTime();
    }

    get html() {
        return;
    }
    get shortForm() {
        return ("Video");
    }
}

export default VideoMessage;
