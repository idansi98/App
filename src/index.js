import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import chatHandler from './chatStuff/chatFunctions';


init();
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home"/>);

function fillMessages() {
    chatHandler.addUser("Idan","Idan Simai","/suspicious.png","Simai");
    chatHandler.addUser("Ido","Ido Tziony","/defaultPFP.png","Tziony");
    chatHandler.addUser("1","Bob Habanai","/defaultPFP.png","2");
    chatHandler.addUser("2","Leo","/defaultPFP.png","3");
    chatHandler.addUser("3","James","/defaultPFP.png","4");
    chatHandler.addUser("4","Hemi.Hemi","/defaultPFP.png","5");
    chatHandler.addUser("Alice","Alis","/defaultPFP.png","Alice");
    var idan = chatHandler.findUser("Idan");
    var ido = chatHandler.findUser("Ido");
    var alice = chatHandler.findUser("Alice")
    var bob = chatHandler.findUser("1")
    var leo = chatHandler.findUser("2");
    var james = chatHandler.findUser("3");
    var hemi = chatHandler.findUser("4");
    chatHandler.sendTextMessage(idan,ido,"hi");
    chatHandler.sendTextMessage(idan,ido,"how are you?");
    chatHandler.sendTextMessage(ido,idan,"I am fine, thanks!");
    chatHandler.sendTextMessage(alice,idan,"HI IDAN!")
    chatHandler.sendTextMessage(bob,idan,"YO I AM BOB LMAO LONG MESSSAGEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE")
    chatHandler.sendTextMessage(idan,bob,"AGSKLKGLASPKG:LASKG:LASKGL:KAS:LGKAL:SGK:ASKG:LASKG:LKASL:GK:LASKG:LAKSGL:")
}

//We intillize the data base and adding the users.
function init() {
    global.currentUser = null;
    global.currentChat = null;
    global.lastMessageID=-1;
    chatHandler.initDB();
    fillMessages()
}