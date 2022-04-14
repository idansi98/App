import UserCollection from "../classes/userCollection";

//Initiallize the all users global array.
function initDB() {
    global.userDB = new UserCollection();
}

function addUser(userName,displayName,image,password) {
    global.userDB.addUser(userName,displayName,image,password);
}

function findUser(userName) {
    return global.userDB.findUserByUserName(userName);
}

function sendTextMessage(sender, reciever, text) {
    global.userDB.sendTextMessage(sender, reciever, text);
}

export default {initDB,addUser,findUser,sendTextMessage};
