import UserCollection from "../classes/userCollection";
import Chat from "../classes/chat";

//Initiallize the all users global array.
function initDB() {
  global.userDB = new UserCollection();
}

function addUser(userName, displayName, image, password) {
  global.userDB.addUser(userName, displayName, image, password);
}

function findUser(userName) {
  return global.userDB.findUserByUserName(userName);
}

function sendTextMessage(sender, reciever, text) {
  global.userDB.sendTextMessage(sender, reciever, text);
}

function sendImageMessage(sender, reciever, path) {
  global.userDB.sendImageMessage(sender, reciever, path);
}
function sendVideoMessage(sender, reciever, path) {
  global.userDB.sendVideoMessage(sender, reciever, path);
}

function sendAudioMessage(sender, reciever, path) {
  global.userDB.sendAudioMessage(sender, reciever, path);
}

function makeBlankChat(sender, reciever) {
  sender.addChat(new Chat(reciever));
  reciever.addChat(new Chat(sender));
}

function printAllUsers() {
  var users = global.userDB.users;
  for (var index in users) {
    console.log(users[index]);
  }
}

function getChatBetween(sender, reciever) {
  return global.userDB.getChatBetween(sender, reciever);
}

function login(userName, password) {
  return global.userDB.login(userName, password);
}
export default {
  initDB, addUser, findUser, sendTextMessage, sendImageMessage, sendVideoMessage,
  sendAudioMessage, makeBlankChat, printAllUsers, getChatBetween, login};
