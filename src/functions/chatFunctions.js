import UserCollection from "../classes/userCollection";
import Chat from "../classes/chat";

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

function makeBlankChat(sender, reciever) {
    console.log(sender)
    console.log(reciever)
    sender.addChat(new Chat(reciever));
    reciever.addChat(new Chat(sender));
}

function printAllUsers() {
    var users = global.userDB.users;
    for (var index in users ) {
        console.log(users[index]);
    }
}
export default {initDB,addUser,findUser,sendTextMessage, makeBlankChat, printAllUsers} ;
