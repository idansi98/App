import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import UserCollection from './classes/userCollection';
import chatHandler from './functions/chatFunctions';


init();
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);

function init() {
    global.currentlyViewedUser = null;
    chatHandler.initDB();
    chatHandler.addUser("Idan","Idan Simai","/IMG-8479.PNG","Simai");
    chatHandler.addUser("Ido","Ido Tziony","/IMG-8479.PNG","Tziony");
    chatHandler.addUser("1","Bob Habanai","/IMG-8479.PNG","2");
    chatHandler.addUser("Alice","Alis","/IMG-8479.PNG","Alice");
    var idan = chatHandler.findUser("Idan");
    var ido = chatHandler.findUser("Ido");
    var alice = chatHandler.findUser("Alice")
    var bob = chatHandler.findUser("1")
    console.log(idan);
    console.log(ido);
    console.log(alice)
    console.log(bob)
    chatHandler.sendTextMessage(idan,ido,"hi");
    chatHandler.sendTextMessage(idan,ido,"how are you?");
    chatHandler.sendTextMessage(ido,idan,"I am fine, thanks!");
    chatHandler.sendTextMessage(alice,idan,"HI IDAN!")
    chatHandler.sendTextMessage(bob,idan,"YO I AM BOB LMAO")

}

