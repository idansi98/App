class ImageMessage {
    constructor(filePath, sender) {
        this.filePath = filePath;
        this.sender = sender;
        this.dateTime = new Date().getTime();
    }
    get html() {
        return;
    }
    get shortForm() {
        return ("Image");
    }
}

export default ImageMessage;